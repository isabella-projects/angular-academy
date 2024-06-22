import {
    Component,
    DestroyRef,
    OnChanges,
    OnInit,
    SimpleChanges,
    effect,
    inject,
    signal,
    /* OnDestroy,*/
} from '@angular/core';

import { ServerStatus } from './server-status.model';

@Component({
    selector: 'app-server-status',
    standalone: true,
    imports: [],
    templateUrl: './server-status.component.html',
    styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
    currentStatus = signal<ServerStatus>('offline');

    private readonly INTERVAL_TIME: number = 5000;

    /* ------------ Angular > 16 (Modern Angular way) ---------- */
    private destroyRef = inject(DestroyRef);

    /* ------------ Angular < 16 (Old way) ----------
    private interval?: ReturnType<typeof setInterval>;
    ------------------------------------------------- */

    constructor() {
        effect((/* clean */) => {
            console.log(this.currentStatus());

            /* --- Clean effect ---
            clean(() => {
                console.log('Clear effect before running it again!');
            });
            ------ */
        });
    }

    ngOnInit(): void {
        /* ----  Angular > 16 (Modern Angular way of destroying) ---- */
        const interval = setInterval(() => {
            const random = Math.random();

            if (random < 0.5) {
                this.currentStatus.set('online');
            } else if (random < 0.9) {
                this.currentStatus.set('offline');
            } else {
                this.currentStatus.set('unknown');
            }
        }, this.INTERVAL_TIME);

        this.destroyRef.onDestroy(() => {
            clearInterval(interval);
        });

        /* ------------- Angular < 16 (Old way) -----------------
        this.interval = setInterval(() => {
            const random = Math.random();

            if (random < 0.5) {
                this.currentStatus = 'online';
            } else if (random < 0.9) {
                this.currentStatus = 'offline';
            } else {
                this.currentStatus = 'unknown';
            }
        }, this.INTERVAL_TIME);
        ------------------------------------------------------ */
    }

    /* --------- Angular < 16 (Old way of destroying) ------
    ngOnDestroy(): void {
        clearTimeout(this.interval);
    }
    ---------------------------------------------------- */
}
