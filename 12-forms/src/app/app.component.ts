import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './auth/login/login.component';

import { FormType } from './auth/login/login.model';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [LoginComponent, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    formType: FormType = 'reactive';
}
