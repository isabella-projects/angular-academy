import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { selectCount, selectDoubleCount } from '../store/counter.selectors';

import { ICounterShape } from '../store/counter.model';

@Component({
    selector: 'app-counter-output',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './counter-output.component.html',
    styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent {
    count$: Observable<number>;
    doubleCount$: Observable<number>;

    private store = inject<Store<ICounterShape>>(Store);

    constructor() {
        this.count$ = this.store.select(selectCount);
        this.doubleCount$ = this.store.select(selectDoubleCount);
    }
}
