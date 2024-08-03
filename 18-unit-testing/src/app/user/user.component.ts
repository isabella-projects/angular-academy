import { Component } from '@angular/core';
import { IUser } from './user.model';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    user: IUser = { name: 'Developer' };
    isLoggedIn: boolean = true;
}
