import { Component } from '@angular/core';

import { DUMMY_USERS, User } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    protected selectedUser: User = DUMMY_USERS[randomIndex];

    get imagePath(): string {
        return 'assets/users/' + this.selectedUser.avatar;
    }

    onSelectUser() {
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        this.selectedUser = DUMMY_USERS[randomIndex];
    }
}
