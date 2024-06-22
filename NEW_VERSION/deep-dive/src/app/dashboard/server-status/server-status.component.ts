import {
    Component,
    OnDestroy,
    OnInit /* DestroyRef, inject */,
} from '@angular/core';

import { ServerStatus } from './server-status.model';

@Component({
    selector: 'app-server-status',
    standalone: true,
    imports: [],
    templateUrl: './server-status.component.html',
    styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
    currentStatus: ServerStatus = 'offline';

    private readonly INTERVAL_TIME: number = 5000;
    private interval?: ReturnType<typeof setInterval>;

    /* ------------ Angular > 16 (Modern Angular way) ---------------
    private destroyRef = inject(DestroyRef)
    ----------------------------------------------------------------- */

    ngOnInit(): void {
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

        /* -- Angular > 16 (Modern Angular way of destroying) --

        const interval = setInterval(() => {
            const random = Math.random();

            if(random < 0.5) {
                this.currentStatus = 'online';
            } else if (random < 0.9) {
                this.currentStatus = 'offline';
            } else {
                this.currentStatus = 'unknown';
            }
        }, this.INTERVAL_TIME);

        this.destroyRef.onDestroy(() => {
            clearInterval(interval);
        })
            
        ----------- */
    }

    ngOnDestroy(): void {
        clearTimeout(this.interval);
    }
}
