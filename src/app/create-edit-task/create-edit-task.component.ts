import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {createTask, PriorityOptions, Task} from '../interfaces/task.model';
import {TasksService} from '../services/tasks/state/tasks.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.scss']
})
export class CreateEditTaskComponent implements OnInit, OnDestroy {
  @Input() openDrawer: Observable<Task | null> = of(null);

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

  create() {

  }

  async clear() {
    this.loading = true;
    await this.tasksService.clearTask(this.task.id);
    this.loading = false;
    this.isVisible = false;
  }
}
