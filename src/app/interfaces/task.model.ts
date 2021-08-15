import {NzSelectOptionInterface} from 'ng-zorro-antd/select';

export interface Task {
  id: number;
  completedAt: Date | null;
  clearedAt: Date | null;
  scheduledAt: Date;
  title: string;
  description: string | null;
  priority: Priority;
  recurringTaskId: number | null;
}

export function createTask(params: Partial<Task>): Task {
  return {
    id: params.id ?? 0,
    completedAt: params.completedAt ? new Date(params.completedAt) : null,
    clearedAt: params.clearedAt ? new Date(params.clearedAt) : null,
    scheduledAt: params.scheduledAt ? new Date(params.scheduledAt) : null,
    title: params.title ?? null,
    description: params.description ?? null,
    priority: Number.isNaN(params.priority) ? null : Number(params.priority),
    recurringTaskId: Number.isNaN(params.recurringTaskId) ? null : Number(params.recurringTaskId),
  } as Task;
}

export enum Priority {
  High = 1,
  Normal = 2,
  Low = 3,
}

export const PriorityOptions: NzSelectOptionInterface[] = [
  { label: 'High', value: Priority.High},
  { label: 'Normal', value: Priority.Normal},
  { label: 'Low', value: Priority.Low},
];
