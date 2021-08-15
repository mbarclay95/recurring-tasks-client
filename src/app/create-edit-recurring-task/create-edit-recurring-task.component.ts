import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {PriorityOptions} from '../interfaces/task.model';
import {
  createRecurringTask,
  ModeOptions,
  Modes, MonthDayOptions,
  RecurringTask,
  WeekdayOptions
} from '../interfaces/recurring-task.model';
import {RecurringTasksService} from '../services/recurring-tasks/state/recurring-tasks.service';
import {takeUntil} from 'rxjs/operators';

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

  private subscriptionDestroyer: Subject<void> = new Subject<void>();

  constructor(
    private recurringTasksService: RecurringTasksService,
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
    ).subscribe(recurringTask => {
      if (recurringTask === null) {
        return;
      }
      this.recurringTask = createRecurringTask(recurringTask);
      this.isVisible = true;
    });
  }

  switchMode(newMode: Modes) {
    switch (newMode) {
      case Modes.WEEKLY:
        this.recurringTask.taskMetadata = {weekdays: []};
        break;
      case Modes.MONTHLY:
        this.recurringTask.taskMetadata = {monthDays: []};
        break;
      case Modes.YEARLY:
        this.recurringTask.taskMetadata = {yearDays: []};
        break;
    }
    this.recurringTask.mode = newMode;
  }

  async create() {
    this.loading = true;
    await this.recurringTasksService.create(this.recurringTask);
    this.loading = false;
    this.isVisible = false;
  }
}
