import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {RecurringTasksQuery} from '../../services/recurring-tasks/state/recurring-tasks.query';
import {RecurringTasksService} from '../../services/recurring-tasks/state/recurring-tasks.service';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {RecurringTask} from '../../interfaces/recurring-task.model';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recurring-task-table',
  templateUrl: './recurring-task-table.component.html',
  styleUrls: ['./recurring-task-table.component.scss']
})
export class RecurringTaskTableComponent implements OnInit {
  @Input() recurringTasks: RecurringTask[];
  @ViewChild('recurringTaskTableTag', {static: true}) recurringTaskTable: NzTableComponent<RecurringTask>;
  @Output() editRecurringTask: EventEmitter<RecurringTask> = new EventEmitter<RecurringTask>();

  edit = faEdit;

  constructor(
    public recurringTasksQuery: RecurringTasksQuery,
    public recurringTasksService: RecurringTasksService
  ) {
  }

  ngOnInit(): void {
  }

}
