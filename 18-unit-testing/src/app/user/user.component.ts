import { Component, inject, OnInit } from '@angular/core';
import { IUser } from './user.model';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
    user!: IUser;
    data!: string;
    isLoggedIn: boolean = false;

    private usersService = inject(UserService);
    private dataService = inject(DataService);

    ngOnInit(): void {
        this.user = this.usersService.user;
        this.dataService.getDetails().then((data) => (this.data = data));
    }
}
