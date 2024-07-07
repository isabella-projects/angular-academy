import {
    Component,
    DestroyRef,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [],
})
export class AppComponent implements OnInit {
    clickCount = signal(0);
    clickCount$ = toObservable(this.clickCount);

    interval$ = interval(1000);
    interval = toSignal(this.interval$, { initialValue: 0 });

    private destroyRef = inject(DestroyRef);

    constructor() {
        /* Using Angular effect method
        effect(() => {
            console.log(`Clicked button ${this.clickCount()} times.`);
        });
        */
    }

    ngOnInit(): void {
        const subscription = this.clickCount$.subscribe((_val) => {
            console.log(`Clicked button ${this.clickCount()} times.`);
        });

        this.destroyRef.onDestroy(() => {
            subscription.unsubscribe();
        });

        /* Example of RxJS observables
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
        this.clickCount.update((prevCount) => prevCount + 1);
    }
}
