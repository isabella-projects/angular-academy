import { Component } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
})
export class TaskComponent {
    oddNumbers: number[] = [];
    evenNumbers: number[] = [];

    onIntervalFired(firedNumber: number) {
        if (firedNumber % 2 === 0) {
            this.evenNumbers.push(firedNumber);
        } else {
            this.oddNumbers.push(firedNumber);
        }
    }
}
