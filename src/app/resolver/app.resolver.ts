import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {TasksService} from '../services/tasks/state/tasks.service';
import {RecurringTasksService} from '../services/recurring-tasks/state/recurring-tasks.service';

@Injectable({
  providedIn: 'root'
})
export class AppResolver implements Resolve<void> {

  constructor(
    private tasksService: TasksService,
    private recurringTasksService: RecurringTasksService
  ) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void> {
    await this.tasksService.getTasks();
  }
}
