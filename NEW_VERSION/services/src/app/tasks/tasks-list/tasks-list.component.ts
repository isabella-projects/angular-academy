import { Component, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';

@Component({
    selector: 'app-tasks-list',
    standalone: true,
    imports: [TaskItemComponent],
    templateUrl: './tasks-list.component.html',
    styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
    selectedFilter = signal<string>('all');
    tasks = [];

    onChangeTasksFilter(filter: string) {
        this.selectedFilter.set(filter);
    }
}
