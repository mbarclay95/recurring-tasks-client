import { Component, OnInit } from '@angular/core';
import {RecurringTasksQuery} from '../../services/recurring-tasks/state/recurring-tasks.query';
import {Subject} from 'rxjs';
import {RecurringTask} from '../../interfaces/recurring-task.model';

@Component({
  selector: 'app-recurring-tasks-page',
  templateUrl: './recurring-tasks-page.component.html',
  styleUrls: ['./recurring-tasks-page.component.scss']
})
export class RecurringTasksPageComponent implements OnInit {
  openDrawer: Subject<RecurringTask> = new Subject<RecurringTask>();

  constructor(
    public recurringTasksQuery: RecurringTasksQuery,
  ) { }

  ngOnInit(): void {
  }

}
