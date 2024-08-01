import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { ICounterOutput } from './counter-output.model';

@Component({
    selector: 'app-counter-output',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './counter-output.component.html',
    styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent {
    count$: Observable<number>;
    private store = inject<Store<ICounterOutput>>(Store);

    constructor() {
        this.count$ = this.store.select('counter');
    }
}
