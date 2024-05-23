import { Component } from '@angular/core';

import { ServerContent, DataServer } from './types/types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    serverElements: ServerContent[] = [];

    onServerAdded(serverData: DataServer) {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent,
        });
    }

    onBlueprintAdded(blueprintData: DataServer) {
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.serverName,
            content: blueprintData.serverContent,
        });
    }

    onChangeFirst() {
        this.serverElements[0].name = 'Changed';
    }

    onDestroyFirst() {
        this.serverElements.splice(0, 1);
    }
}
