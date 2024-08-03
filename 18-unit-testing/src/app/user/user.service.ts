import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    user: IUser = {
        name: 'Developer',
    };
}
