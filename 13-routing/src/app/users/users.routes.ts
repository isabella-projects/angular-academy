import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    ResolveFn,
    RouterStateSnapshot,
    Routes,
} from '@angular/router';
import {
    canLeaveEditPage,
    NewTaskComponent,
} from '../tasks/new-task/new-task.component';
import { Task } from '../tasks/task/task.model';
import { TasksService } from '../tasks/tasks.service';

const resolveUserTasks: ResolveFn<Task[]> = (
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot,
) => {
    const order = activatedRoute.queryParams['order'];
    const tasksService = inject(TasksService);
    const tasks = tasksService
        .allTasks()
        .filter(
            (task) => task.userId === activatedRoute.paramMap.get('userId'),
        );

    if (order && order === 'asc') {
        tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
        tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
    }

    return tasks.length ? tasks : [];
};

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full', // in this case we could also use 'prefix'
    },
    {
        path: 'tasks', // <domain>/users/<id>/tasks
        loadComponent: () =>
            import('../tasks/tasks.component').then(
                (mod) => mod.TasksComponent,
            ),
        runGuardsAndResolvers: 'always',
        resolve: {
            userTasks: resolveUserTasks,
        },
    },
    {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
    },
];
