import { Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
    selector: 'app-messages',
    standalone: true,
    imports: [MessagesListComponent, NewMessageComponent],
    templateUrl: './messages.component.html',
    styleUrl: './messages.component.css',
})
export class MessagesComponent {
    messages = signal<string[]>([]);

    get debugOutput() {
        console.log('[Messages] "debugOutput" binding re-evaluated.');
        return 'Messages Component Debug Output';
    }

    onAddMessage(message: string) {
        this.messages.update((oldMessages) => [...oldMessages, message]);
    }
}
