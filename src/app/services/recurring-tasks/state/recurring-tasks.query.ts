import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RecurringTasksStore, RecurringTasksState } from './recurring-tasks.store';
import {Observable} from 'rxjs';
import {RecurringTask} from '../../../interfaces/recurring-task.model';

@Injectable({ providedIn: 'root' })
export class RecurringTasksQuery extends QueryEntity<RecurringTasksState> {
  recurringTasks$: Observable<RecurringTask[]> = this.selectAll();

  constructor(
    protected store: RecurringTasksStore
  ) {
    super(store);
  }

}
