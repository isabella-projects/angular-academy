import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', // <domain>/
        component: NoTaskComponent,
    },
    {
        path: 'users/:userId', // <domain>/users/4 (e.g)
        component: UserTasksComponent,
        children: [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'prefix',
            },
            {
                path: 'tasks', // <domain>/users/<id>/tasks
                component: TasksComponent,
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
            },
        ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
