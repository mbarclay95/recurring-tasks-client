import {Component, Input, OnInit} from '@angular/core';
import {RecurringTask} from '../../interfaces/recurring-task.model';
import {RecurringTasksService} from '../../services/recurring-tasks/state/recurring-tasks.service';

@Component({
  selector: 'app-recurring-task-history-row',
  templateUrl: './recurring-task-history-row.component.html',
  styleUrls: ['./recurring-task-history-row.component.scss']
})
export class RecurringTaskHistoryRowComponent implements OnInit {
  @Input() recurringTask: RecurringTask;

  loading = false;

  constructor(
    public recurringTasksService: RecurringTasksService
  ) { }

  async ngOnInit(): Promise<void> {
    if (!this.recurringTask.taskHistory.loaded) {
      this.loading = true;
      await this.recurringTasksService.getTaskHistory(this.recurringTask);
      this.loading = false;
    }
  }

}
