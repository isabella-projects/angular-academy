import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';

import { TasksService } from './app/tasks/tasks.service';

export const TasksServiceToken = new InjectionToken<TasksService>(
    'tasks-service-token'
);

bootstrapApplication(AppComponent, {
    providers: [{ provide: TasksServiceToken, useClass: TasksService }],
}).catch((error) => console.error(error));

/* Alternative way for injecting services applications
bootstrapApplication(AppComponent, {
    providers: [TasksService]
}).catch((err) => console.error(err));
---------------------------------------------- */
