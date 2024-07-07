import { Component } from '@angular/core';

import { type User } from './user/user.model';

import { DUMMY_USERS } from './users';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
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
