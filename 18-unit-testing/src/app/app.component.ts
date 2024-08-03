import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [UserComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'Angular Developer';
}
