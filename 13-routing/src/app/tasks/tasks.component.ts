import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskOrder } from './task/task.model';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, RouterLink],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    private tasksService = inject(TasksService);
    userId = input.required<string>();
    order = input<TaskOrder>('desc');

    userTasks = computed(() =>
        this.tasksService
            .allTasks()
            .filter((task) => task.userId === this.userId())
            .sort((a, b) => {
                if (this.order() === 'desc') {
                    return a.id > b.id ? -1 : 1;
                } else {
                    return a.id > b.id ? 1 : -1;
                }
            })
    );
}
