import { Component, inject } from '@angular/core';

import { CounterService } from '../counter.service';

@Component({
    selector: 'app-counter-controls',
    standalone: true,
    imports: [],
    templateUrl: './counter-controls.component.html',
    styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
    counterService = inject(CounterService);

    increment() {
        this.counterService.increment();
    }

    decrement() {
        this.counterService.decrement();
    }
}
