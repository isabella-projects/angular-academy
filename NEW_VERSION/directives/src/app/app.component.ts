import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AuthComponent, LearningResourcesComponent, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    private authService = inject(AuthService);
    isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
