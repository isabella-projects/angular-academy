import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { DUMMY_TASKS } from '../dummy-tasks';
import { Task } from './tasks.model';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent],
})
export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name!: string;

    tasks: Task[] = DUMMY_TASKS;

    get selectedUserTasks() {
        return this.tasks.filter((task) => task.userId === this.userId);
    }
}
