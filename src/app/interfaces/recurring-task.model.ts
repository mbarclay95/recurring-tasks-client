import {Priority} from './task.model';
import {NzSelectOptionInterface} from 'ng-zorro-antd/select';

export interface RecurringTask {
  id: number;
  title: string;
  mode: Modes;
  description: string;
  priority: Priority;
  taskMetadata: TaskMetadataDef;

}

export function createRecurringTask(params: Partial<RecurringTask>): RecurringTask {
  return {
    id: params.id ?? 0,
    title: params.title ?? null,
    mode: params.mode ?? null,
    description: params.description ?? null,
    priority: Number.isNaN(params.priority) ? null : Number(params.priority),
    taskMetadata: {...params.taskMetadata ?? {}}
  } as RecurringTask;
}

export function frequencyToString(recurringTask: RecurringTask): string {
  switch (recurringTask.mode) {
    case Modes.DAILY:
      if (recurringTask.taskMetadata.everyNDays === 1) {
        return 'day';
      }
      return `${recurringTask.taskMetadata.everyNDays} days`;
    case Modes.WEEKLY:
      if (recurringTask.taskMetadata.everyNWeeks === 1) {
        return 'week';
      }
      return `${recurringTask.taskMetadata.everyNWeeks} weeks`;
    case Modes.MONTHLY:
      if (recurringTask.taskMetadata.everyNMonths === 1) {
        return 'month';
      }
      return `${recurringTask.taskMetadata.everyNMonths} months`;
  }

  return '';
}

export interface TaskMetadataDef {
  weekdays?: number[];
  monthDays?: number[];
  yearDays?: Date[];
  everyNDays?: number;
  everyNWeeks?: number;
  everyNMonths?: number;
}

export enum Modes {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

export const ModeOptions: NzSelectOptionInterface[] = [
  {label: 'Daily', value: Modes.DAILY},
  {label: 'Weekly', value: Modes.WEEKLY},
  {label: 'Monthly', value: Modes.MONTHLY},
  // { label: 'Yearly', value: Modes.YEARLY},
];

export const WeekdayOptions: NzSelectOptionInterface[] = [
  {label: 'Sunday', value: 0},
  {label: 'Monday', value: 1},
  {label: 'Tuesday', value: 2},
  {label: 'Wednesday', value: 3},
  {label: 'Thursday', value: 4},
  {label: 'Friday', value: 5},
  {label: 'Saturday', value: 6},
];

export const MonthDayOptions: NzSelectOptionInterface[] = [
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
  {label: '9', value: 9},
  {label: '10', value: 10},
  {label: '11', value: 11},
  {label: '12', value: 12},
  {label: '13', value: 13},
  {label: '14', value: 14},
  {label: '15', value: 15},
  {label: '16', value: 16},
  {label: '17', value: 17},
  {label: '18', value: 18},
  {label: '19', value: 19},
  {label: '20', value: 20},
  {label: '21', value: 21},
  {label: '22', value: 22},
  {label: '23', value: 23},
  {label: '24', value: 24},
  {label: '25', value: 25},
  {label: '26', value: 26},
  {label: '27', value: 27},
  {label: '28', value: 28},
  {label: '29', value: 29},
  {label: '30', value: 30},
  {label: '31', value: 31},
];
