import { Component, inject } from '@angular/core';

import { CounterService } from '../counter.service';

@Component({
    selector: 'app-counter-output',
    standalone: true,
    imports: [],
    templateUrl: './counter-output.component.html',
    styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent {
    counterService = inject(CounterService);
    counter = this.counterService.counter;
}
