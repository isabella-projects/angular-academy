import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    getDetails() {
        const result = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 1500);
        });
        return result;
    }
}
