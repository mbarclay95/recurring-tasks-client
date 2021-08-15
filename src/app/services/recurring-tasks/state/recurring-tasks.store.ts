import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { RecurringTask } from '../../../interfaces/recurring-task.model';

export interface RecurringTasksState extends EntityState<RecurringTask> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'recurring-tasks' })
export class RecurringTasksStore extends EntityStore<RecurringTasksState> {

  constructor() {
    super();
  }

}
