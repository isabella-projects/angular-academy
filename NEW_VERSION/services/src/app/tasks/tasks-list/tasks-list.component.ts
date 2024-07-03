import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';

import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-tasks-list',
    standalone: true,
    imports: [TaskItemComponent],
    templateUrl: './tasks-list.component.html',
    styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
    private tasksService = inject(TasksService);
    private selectedFilter = signal<string>('all');

    tasks = computed(() => {
        switch (this.selectedFilter()) {
            case 'open':
                return this.tasksService.allTasks().filter((task) => {
                    return task.status === 'OPEN';
                });
            case 'in-progress':
                return this.tasksService.allTasks().filter((task) => {
                    return task.status === 'IN_PROGRESS';
                });
            case 'done':
                return this.tasksService.allTasks().filter((task) => {
                    return task.status === 'DONE';
                });
            default:
                return this.tasksService.allTasks();
        }
    });

    // We can the service inject into the constructor again, but we user alternative method (inject) up above

    onChangeTasksFilter(filter: string) {
        this.selectedFilter.set(filter);
    }
}
