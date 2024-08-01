import { Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { decrement, increment } from '../store/counter.actions';
import { ICounterOutput } from '../counter-output/counter-output.model';

@Component({
    selector: 'app-counter-controls',
    standalone: true,
    imports: [],
    templateUrl: './counter-controls.component.html',
    styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
    private store = inject<Store<ICounterOutput>>(Store);

    increment() {
        this.store.dispatch(increment({ value: 2 }));
    }

    decrement() {
        this.store.dispatch(decrement({ value: 2 }));
    }
}
