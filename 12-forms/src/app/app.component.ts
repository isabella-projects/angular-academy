import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [LoginComponent, SignupComponent, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
