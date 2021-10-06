import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {PriorityOptions, Task} from '../../interfaces/task.model';
import {TasksService} from '../../services/tasks/state/tasks.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.scss']
})
export class CreateEditTaskComponent implements OnInit, OnDestroy {
  @Input() openDrawer: Observable<Task | null> = of(null);

  drawerWidth = '';
  isVisible = false;
  task!: Task;
  isTask = true;
  PriorityOptions = PriorityOptions;
  loading = false;

  private subscriptionDestroyer: Subject<void> = new Subject<void>();

  constructor(
    public tasksService: TasksService,
  ) {
  }

  ngOnInit(): void {
    this.subscribeToOpen();
    const screenWidth = screen.width;
    this.drawerWidth = screenWidth < 500 ? `${screenWidth}px` : '500px';
  }

  ngOnDestroy(): void {
    this.subscriptionDestroyer.next();
    this.subscriptionDestroyer.complete();
  }

  subscribeToOpen(): void {
    this.openDrawer.pipe(
      takeUntil(this.subscriptionDestroyer),
    ).subscribe(task => {
      if (task === null) {
        return;
      }
      this.task = task;
      this.isVisible = true;
    });
  }

  async create(): Promise<void> {
    this.loading = true;
    await this.tasksService.createNew(this.task);
    this.loading = false;
    this.isVisible = false;
  }

  updateTask(newState: Partial<Task>): void {
    if (this.task.id === 0) {
      this.task = {...this.task, ...newState};
      return;
    }

    this.tasksService.update(this.task.id, newState);
  }

  async clear(): Promise<void> {
    this.loading = true;
    await this.tasksService.clearTask(this.task.id);
    this.loading = false;
    this.isVisible = false;
  }
}
