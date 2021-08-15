import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksStore } from './tasks.store';
import {createTask, Task} from '../../../interfaces/task.model';
import {environment} from '../../../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TasksService {

  constructor(
    private tasksStore: TasksStore,
    private http: HttpClient
  ) {
  }

  async getTasks(): Promise<void> {
    await this.http.get<Task[]>(`${environment.apiUrl}/tasks`).pipe(
      map(tasks => tasks.map(t => createTask(t))),
      tap(tasks => this.tasksStore.set(tasks))
    ).toPromise();
  }

  async createNew(task: Task): Promise<void> {
    await this.http.post<Task>(`${environment.apiUrl}/tasks`, task).pipe(
      map(t => createTask(t)),
      tap(t => this.tasksStore.add(t))
    ).toPromise();
  }

  async update(id: number, newState: Partial<Task>): Promise<void> {
    await this.http.patch(`${environment.apiUrl}/tasks/${id}`, newState).pipe(
      map(t => createTask(t)),
      tap(t => this.tasksStore.update(id, t))
    ).toPromise();
  }

  async clearTask(id: number): Promise<void> {
    await this.http.patch(`${environment.apiUrl}/tasks/${id}`, {clearedAt: new Date()}).pipe(
      tap(() => this.tasksStore.remove(id))
    ).toPromise();
  }

}
