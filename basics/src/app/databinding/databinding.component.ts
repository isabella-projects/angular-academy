import { Component } from '@angular/core';

@Component({
    selector: 'databinding',
    templateUrl: './databinding.component.html',
    styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
    public username = '';

    protected checkField(): boolean {
        return !this.username.trim();
    }

    protected resetField(): void {
        if (!this.checkField()) {
            this.username = '';
        }
    }
}
