import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    private tasksService = inject(TasksService);
    userId = input.required<string>();

    userTasks = computed(() =>
        this.tasksService
            .allTasks()
            .filter((task) => task.userId === this.userId())
    );
}
