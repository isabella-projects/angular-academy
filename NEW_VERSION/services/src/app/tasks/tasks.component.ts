import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [NewTaskComponent, TasksListComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    /* Alternative way for injecting the services for the parent component and its children */
    /* NOTE: The service WON'T be available in the app component (root) - Element Injector behavior */
    // providers: [TasksService]
})
export class TasksComponent {}
