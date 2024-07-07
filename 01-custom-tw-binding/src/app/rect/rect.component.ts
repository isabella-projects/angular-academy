import { Component, EventEmitter, Input, Output, model } from '@angular/core';

import { RectModel } from './rect.model';

@Component({
    selector: 'app-rect',
    standalone: true,
    imports: [],
    templateUrl: './rect.component.html',
    styleUrl: './rect.component.css',
})
export class RectComponent {
    // Old Angular < 17.3 || also possible with input/output methods, but there's better way.
    // @Input({required: true}) size!: RectModel;
    // @Output() sizeChange = new EventEmitter<RectModel>();

    // Modern Angular 'model' method > 17.3
    size = model.required<RectModel>();

    onReset() {
        this.size.set({
            width: '200',
            height: '100',
        });
    }
}
