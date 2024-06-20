import { Component, OnInit } from '@angular/core';

import { ServerStatus } from './server-status.model';

@Component({
    selector: 'app-server-status',
    standalone: true,
    imports: [],
    templateUrl: './server-status.component.html',
    styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
    private readonly INTERVAL: number = 5000;
    currentStatus: ServerStatus = 'offline';

    ngOnInit(): void {
        setInterval(() => {
            const random = Math.random();

            if (random < 0.5) {
                this.currentStatus = 'online';
            } else if (random < 0.9) {
                this.currentStatus = 'offline';
            } else {
                this.currentStatus = 'unknown';
            }
        }, this.INTERVAL);
    }
}
