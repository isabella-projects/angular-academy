import { Component } from '@angular/core';

import { v4 as uuid } from 'uuid';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrl: './server.component.css',
})
export class ServerComponent {
    serverId: string = uuid().substring(0, 13);
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
