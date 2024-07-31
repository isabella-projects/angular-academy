import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    counter = signal(0);

    increment() {
        this.counter.update((val) => val + 1);
    }

    decrement() {
        this.counter.update((val) => val - 1);
    }
}
