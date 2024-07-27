import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

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
                path: 'tasks', // <domain>/users/<id>/tasks
                component: TasksComponent,
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
            },
        ],
    },
];
