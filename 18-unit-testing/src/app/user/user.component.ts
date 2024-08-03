import { Component, inject, OnInit } from '@angular/core';
import { IUser } from './user.model';
import { UserService } from './user.service';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
    user!: IUser;
    isLoggedIn: boolean = false;

    private usersService = inject(UserService);

    ngOnInit(): void {
        this.user = this.usersService.user;
    }
}
