import { inject, Injectable, signal } from '@angular/core';

import { Task, TaskStatus } from './task.model';

import { LoggingService } from '../logging.service';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService);

    allTasks = this.tasks.asReadonly();

    addTask(taskData: Omit<Task, 'id' | 'status'>) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN',
        };

        this.tasks.update((oldTasks) => {
            return [...oldTasks, newTask];
        });
        this.loggingService.log(taskData);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) => {
            return oldTasks.map((task) => {
                return task.id === taskId
                    ? { ...task, status: newStatus }
                    : task;
            });
        });
        this.loggingService.log('Changed Task status to: ' + newStatus);
    }
}
