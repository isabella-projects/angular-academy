import { Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { ICounterShape } from '../counter-output/counter-output.model';
import { decrement, increment } from '../store/counter.actions';

@Component({
    selector: 'app-counter-controls',
    standalone: true,
    imports: [],
    templateUrl: './counter-controls.component.html',
    styleUrl: './counter-controls.component.css',
})
export class CounterControlsComponent {
    store = inject<Store<ICounterShape>>(Store);

    increment() {
        this.store.dispatch(
            increment({
                value: 2,
            }),
        );
    }

    decrement() {
        this.store.dispatch(
            decrement({
                value: 2,
            }),
        );
    }
}
