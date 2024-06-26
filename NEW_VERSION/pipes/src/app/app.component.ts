import { Component } from '@angular/core';

import { DatePipe, DecimalPipe } from '@angular/common';

import { TemperaturePipe } from './pipes/temperature/temperature.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    currentDate: Date = new Date();
    currentTemperatures = {
        berlin: 4.2749812,
        newYork: 18.1214,
        paris: 72.1209001,
        chicago: 65.0775238,
    };
    historicTemperatures = [
        25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
    ];

    onReset(index: number) {
        const temp = [...this.historicTemperatures];
        temp[index] = 18;
        this.historicTemperatures = temp;
    }
}
