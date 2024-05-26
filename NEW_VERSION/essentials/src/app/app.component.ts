import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './users';
import { type User } from './user/user.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
    users: User[] = DUMMY_USERS;
    selectedUserId?: string;

    get selectedUser(): User {
        return this.users.find((user) => user.id === this.selectedUserId)!;
    }

    onSelectUser(id: string): void {
        this.selectedUserId = id;
    }
}
