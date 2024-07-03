import { Component, inject, signal } from '@angular/core';

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

    selectedFilter = signal<string>('all');
    tasks = this.tasksService.allTasks;

    // We can the service inject into the constructor again, but we user alternative method (inject) up above

    onChangeTasksFilter(filter: string) {
        this.selectedFilter.set(filter);
    }
}
