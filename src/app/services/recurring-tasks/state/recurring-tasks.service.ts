import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RecurringTasksStore} from './recurring-tasks.store';
import {environment} from '../../../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {createRecurringTask, RecurringTask} from '../../../interfaces/recurring-task.model';

@Injectable({ providedIn: 'root' })
export class RecurringTasksService {

  constructor(
    private recurringTasksStore: RecurringTasksStore,
    private http: HttpClient
  ) {
  }

  async create(recurringTask: RecurringTask): Promise<void> {
    await this.http.post(`${environment.apiUrl}/recurring-tasks`, recurringTask).pipe(
      map(r => createRecurringTask(r)),
      tap(r => this.recurringTasksStore.add(r))
    ).toPromise();
  }

  async update(id: number, newState: Partial<RecurringTask>): Promise<void> {
    await this.http.patch(`${environment.apiUrl}/recurring-tasks/${id}`, newState).pipe(
      map(t => createRecurringTask(t)),
      tap(t => this.recurringTasksStore.update(id, t))
    ).toPromise();
  }

  async getRecurringTasks(): Promise<void> {
    await this.http.get<RecurringTask[]>(`${environment.apiUrl}/recurring-tasks`).pipe(
      map(recurringTasks => recurringTasks.map(r => createRecurringTask(r))),
      tap(recurringTasks => this.recurringTasksStore.set(recurringTasks))
    ).toPromise();

  }
}
