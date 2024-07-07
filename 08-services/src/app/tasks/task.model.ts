import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';
type TaskValueType = 'open' | 'in-progress' | 'done';

type TaskOptionsType = {
    value: TaskValueType;
    taskStatus: TaskStatus;
    text: string;
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskOptionsType>(
    'task-status-options'
);

export const TaskStatusOptions: TaskOptionsType = [
    {
        value: 'open',
        taskStatus: 'OPEN',
        text: 'Open',
    },
    {
        value: 'in-progress',
        taskStatus: 'IN_PROGRESS',
        text: 'In-Progress',
    },
    {
        value: 'done',
        taskStatus: 'DONE',
        text: 'Completed',
    },
];

export const taskStatusOptionsProvider: Provider = {
    provide: TASK_STATUS_OPTIONS,
    useValue: TaskStatusOptions,
};

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}
