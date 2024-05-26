import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { USER_TASKS } from '../tasks';
import { Task } from './tasks.model';
import { type NewTask } from './new-task/new-task.model';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name!: string;

    isAddingTask: boolean = false;

    tasks: Task[] = USER_TASKS;

    get selectedUserTasks() {
        return this.tasks.filter((task) => task.userId === this.userId);
    }

    onCompleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCancelAddTask() {
        this.isAddingTask = false;
    }

    onAddTask(taskData: NewTask) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: this.userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
        });
        this.isAddingTask = false;
    }
}
