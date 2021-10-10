import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RecurringTasksStore} from './recurring-tasks.store';
import {environment} from '../../../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {createRecurringTask, RecurringTask, TaskHistory} from '../../../interfaces/recurring-task.model';
import {createTask, Task} from '../../../interfaces/task.model';

@Injectable({ providedIn: 'root' })
export class RecurringTasksService {

  constructor(
    private recurringTasksStore: RecurringTasksStore,
    private http: HttpClient
  ) {
  }

  async create(recurringTask: Omit<RecurringTask, 'taskHistory'>): Promise<void> {
    await this.http.post(`${environment.apiUrl}/recurring-tasks`, recurringTask).pipe(
      map(r => createRecurringTask(r)),
      tap(r => this.recurringTasksStore.add(r))
    ).toPromise();
  }

  async update(id: number, newState: Partial<Omit<RecurringTask, 'taskHistory'>>): Promise<void> {
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

  toggleOpenHistory(id: number, taskHistory: TaskHistory): void {
    const newTaskHistory = {...taskHistory};
    newTaskHistory.open = !newTaskHistory.open;
    this.recurringTasksStore.update(id, {taskHistory: newTaskHistory});
  }

  async getTaskHistory(recurringTask: RecurringTask): Promise<void> {
    const newTaskHistory = {...recurringTask.taskHistory};
    await this.http.get<Task[]>(`${environment.apiUrl}/tasks?recurringTaskId=${recurringTask.id}`).pipe(
      map(tasks => tasks.map(t => createTask(t))),
      tap(tasks => {
        newTaskHistory.loaded = true;
        newTaskHistory.tasks = tasks;
        this.recurringTasksStore.update(recurringTask.id, {taskHistory: newTaskHistory});
      })
    ).toPromise();
  }

  async delete(id: number): Promise<void> {
    await this.http.delete(`${environment.apiUrl}/recurring-tasks/${id}`).pipe(
      tap(() => this.recurringTasksStore.remove(id))
    ).toPromise();
  }
}
