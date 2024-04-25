import { Component, EventEmitter, Output } from '@angular/core';

import { DataServer } from '../types/types';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
    @Output() serverCreated = new EventEmitter<DataServer>();
    @Output() blueprintCreated = new EventEmitter<DataServer>();

    newServerName: string = '';
    newServerContent: string = '';

    onAddServer() {
        this.serverCreated.emit({
            serverName: this.newServerName,
            serverContent: this.newServerContent,
        });
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({
            serverName: this.newServerName,
            serverContent: this.newServerContent,
        });
    }
}
