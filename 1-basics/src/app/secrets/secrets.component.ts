import { Component } from '@angular/core';

@Component({
    selector: 'app-secrets',
    templateUrl: './secrets.component.html',
    styleUrl: './secrets.component.css',
})
export class SecretsComponent {
    protected displayDetails: boolean = false;
    protected log: Date[] = [];

    protected onDisplayDetails(): void {
        this.displayDetails = !this.displayDetails;

        this.log.push(new Date());
    }

    protected getBackgroundColor(logItem: number): string {
        return logItem >= 4 ? 'blue' : 'lightgray';
    }

    protected applyWhiteText(logItem: number): boolean {
        return logItem >= 4;
    }
}
