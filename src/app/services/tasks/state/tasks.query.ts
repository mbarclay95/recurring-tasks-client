import {Injectable} from '@angular/core';
import {Order, QueryConfig, QueryEntity} from '@datorama/akita';
import {TasksState, TasksStore} from './tasks.store';
import {Observable} from 'rxjs';
import {Task} from '../../../interfaces/task.model';
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
@QueryConfig({
  sortBy: 'priority',
  sortByOrder: Order.ASC
})
export class TasksQuery extends QueryEntity<TasksState> {
  tasks$: Observable<Task[]> = this.selectAll();
  completedTasks$: Observable<Task[]> = this.tasks$.pipe(
    map(tasks => tasks.filter(task => !!task.completedAt))
  );
  inCompletedTasks$: Observable<Task[]> = this.tasks$.pipe(
    map(tasks => tasks.filter(task => !task.completedAt))
  );
  constructor(
    protected store: TasksStore
  ) {
    super(store);
  }

}
