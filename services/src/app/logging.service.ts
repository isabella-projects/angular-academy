import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoggingService {
    log(message: string | Record<string, string>) {
        const timeStamp = new Date().toLocaleTimeString();
        if (typeof message === 'object') {
            for (const key in message) {
                console.log(`[${timeStamp}]: ${key}: ${message[key]}`);
            }
        } else {
            console.log(`[${timeStamp}]: ${message}`);
        }
    }
}
