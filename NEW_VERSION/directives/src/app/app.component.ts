import { Component } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AuthComponent, LearningResourcesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
