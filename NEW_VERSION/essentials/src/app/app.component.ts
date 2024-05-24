import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS, User } from './dummy-users';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [HeaderComponent, UserComponent],
})
export class AppComponent {
    users: User[] = DUMMY_USERS;

    onSelectUser(id: string): void {
        console.log('Selected user with id: ' + id);
    }
}
