import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RecurringTasksStore, RecurringTasksState } from './recurring-tasks.store';

@Injectable({ providedIn: 'root' })
export class RecurringTasksQuery extends QueryEntity<RecurringTasksState> {

  constructor(
    protected store: RecurringTasksStore
  ) {
    super(store);
  }

}
