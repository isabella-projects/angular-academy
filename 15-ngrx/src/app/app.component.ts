import { Component } from '@angular/core';

import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CounterOutputComponent, CounterControlsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}