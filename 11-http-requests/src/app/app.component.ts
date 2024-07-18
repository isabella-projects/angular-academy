import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { UserPlacesComponent } from './places/user-places/user-places.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [DatePipe, AvailablePlacesComponent, UserPlacesComponent],
})
export class AppComponent {
    currentYear: Date = new Date();
}
