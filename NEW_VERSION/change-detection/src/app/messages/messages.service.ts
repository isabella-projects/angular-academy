import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    /* RxJS feature for change detection */
    // messages$ = new BehaviorSubject<string[]>([]);

    private messages = signal<string[]>([]);
    allMessages = this.messages.asReadonly();

    addMessage(message: string) {
        this.messages.update((oldMessages) => {
            return [...oldMessages, message];
        });
    }
}
