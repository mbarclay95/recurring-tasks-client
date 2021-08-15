import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../interfaces/task.model';
import {RecurringTask} from '../interfaces/recurring-task.model';

@Pipe({
  name: 'taskDrawerTitle'
})
export class TaskDrawerTitlePipe implements PipeTransform {

  transform(task: Task | RecurringTask | null, ...args: unknown[]): string {
    if (!task) {
      return '';
    }

    let title = task.id === 0 ? 'Create ' : 'Edit ';
    title += ('completedAt' in task ? 'task' : 'recurring task');

    return title;
  }

}
