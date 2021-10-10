import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {
  createRecurringTask,
  ModeOptions,
  Modes,
  MonthDayOptions,
  RecurringTask,
  recurringTaskToSave,
  WeekdayOptions
} from '../../interfaces/recurring-task.model';
import {RecurringTasksService} from '../../services/recurring-tasks/state/recurring-tasks.service';
import {takeUntil} from 'rxjs/operators';
import { PriorityOptions } from 'src/app/interfaces/task.model';

@Component({
  selector: 'app-create-edit-recurring-task',
  templateUrl: './create-edit-recurring-task.component.html',
  styleUrls: ['./create-edit-recurring-task.component.scss']
})
export class CreateEditRecurringTaskComponent implements OnInit, OnDestroy {
  @Input() openDrawer: Observable<RecurringTask | null> = of(null);

  isVisible = false;
  recurringTask!: RecurringTask;
  isTask = true;
  PriorityOptions = PriorityOptions;
  ModeOptions = ModeOptions;
  WeekdayOptions = WeekdayOptions;
  MonthDayOptions = MonthDayOptions;
  Modes = Modes;
  loading = false;
  deleting = false;
  drawerWidth = '';

  private subscriptionDestroyer: Subject<void> = new Subject<void>();

  constructor(
    private recurringTasksService: RecurringTasksService,
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
    ).subscribe(recurringTask => {
      if (recurringTask === null) {
        return;
      }
      this.recurringTask = createRecurringTask(recurringTask);
      this.isVisible = true;
    });
  }

  switchMode(newMode: Modes): void {
    switch (newMode) {
      case Modes.DAILY:
        this.recurringTask.taskMetadata = {everyNDays: 1};
        break;
      case Modes.WEEKLY:
        this.recurringTask.taskMetadata = {weekdays: [], everyNWeeks: 1};
        break;
      case Modes.MONTHLY:
        this.recurringTask.taskMetadata = {monthDays: [], everyNMonths: 1};
    }
    this.recurringTask.mode = newMode;
  }

  async save(): Promise<void> {
    this.loading = true;
    this.recurringTask.id === 0 ?
      await this.recurringTasksService.create(recurringTaskToSave(this.recurringTask)) :
      await this.recurringTasksService.update(this.recurringTask.id, recurringTaskToSave(this.recurringTask));
    this.loading = false;
    this.isVisible = false;
  }

  async delete() {
    this.deleting = true;
    await this.recurringTasksService.delete(this.recurringTask.id);
    this.deleting = false;
    this.isVisible = false;
  }
}
