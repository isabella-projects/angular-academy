import { Routes } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix', // in this case we could also use 'full'
    },
    {
        path: 'tasks', // <domain>/users/<id>/tasks
        component: TasksComponent,
    },
    {
        path: 'tasks/new',
        component: NewTaskComponent,
    },
];
