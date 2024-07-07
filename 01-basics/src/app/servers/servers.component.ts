import { Component } from '@angular/core';

@Component({
    selector: 'servers',
    templateUrl: './servers.component.html',
    styleUrl: './servers.component.css',
})
export class ServersComponent {
    private readonly TIME_OUT = 2000;

    protected servers: string[] = ['Angular Dev', 'Angular Prod'];

    protected allowNewServer: boolean = false;
    protected serverCreated: boolean = false;
    protected serverName: string = '';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, this.TIME_OUT);
    }

    protected onCreateServer(): void {
        if (this.serverName.trim() !== '') {
            this.serverCreated = true;
            this.servers.push(this.serverName);
        }
    }

    protected onUpdateServerName(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.serverName = target.value;
    }
}
