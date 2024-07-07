import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RectComponent } from './rect/rect.component';

import { RectModel } from './rect/rect.model';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule, RectComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    rectSize: RectModel = {
        width: '100',
        height: '100',
    };
}
