import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrl: './game-control.component.css',
})
export class GameControlComponent {
    private readonly DELAY = 1000;

    @Output() intervalFired = new EventEmitter<number>();
    interval: ReturnType<typeof setInterval>;
    lastNumber: number = 0;

    onStartGame(): void {
        this.interval = setInterval(() => {
            this.intervalFired.emit(this.lastNumber + 1);
            this.lastNumber++;
        }, this.DELAY);
    }

    onPauseGame(): void {
        clearInterval(this.interval);
    }
}
