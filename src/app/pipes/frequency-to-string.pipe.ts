import { Pipe, PipeTransform } from '@angular/core';
import {frequencyToString, RecurringTask} from '../interfaces/recurring-task.model';

@Pipe({
  name: 'frequencyToString'
})
export class FrequencyToStringPipe implements PipeTransform {

  transform(recurringTask: RecurringTask, ...args: unknown[]): string {
    return frequencyToString(recurringTask);
  }

}
