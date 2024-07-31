import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TaskComponent } from './task/task.component';

import { Task, TaskOrder } from './task/task.model';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, RouterLink],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent {
    userTasks = input.required<Task[]>();
    userId = input.required<string>();
    order = input<TaskOrder>();
}
