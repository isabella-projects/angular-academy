import {
    Component,
    DestroyRef,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [],
})
export class AppComponent implements OnInit {
    /* Practicing 
    clickCount = signal(0);
    clickCount$ = toObservable(this.clickCount);

    interval$ = interval(1000);
    intervalSignal = toSignal(this.interval$, { initialValue: 0 });
    */

    customInterval$ = new Observable((subscriber) => {
        let timesExecuted = 0;

        const interval = setInterval(() => {
            if (timesExecuted > 3) {
                clearInterval(interval);
                subscriber.complete();
                return;
            }

            subscriber.next({ message: 'New value', value: 1 });
            timesExecuted++;
        }, 2000);
    });

    private destroyRef = inject(DestroyRef);

    constructor() {
        /* Practicing - using Angular effect method
        effect(() => {
            console.log(`Clicked button ${this.clickCount()} times.`);
        });
        */
    }

    ngOnInit(): void {
        this.customInterval$.subscribe({
            next: (val) => console.log(val),
            complete: () => console.log('Completed'),
        });

        /* Practicing (we can also pass object and use next(), error(), completed() methods)
        const subscription = this.clickCount$.subscribe((_val) => {
            console.log(`Clicked button ${this.clickCount()} times.`);
        });

        this.destroyRef.onDestroy(() => {
            subscription.unsubscribe();
        });
        */
        /* Example of RxJS observables and pipes for modifications
        const subscription = interval(1000)
            .pipe(map((val) => val * 2))
            .subscribe((val) => {
                console.log(val);
            });

        this.destroyRef.onDestroy(() => {
            subscription.unsubscribe();
        });
        */
    }

    onClick(): void {
        /* Practicing
        this.clickCount.update((prevCount) => prevCount + 1);
        */
    }
}
