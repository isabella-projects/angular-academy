import { Component, input } from '@angular/core';

import { ImageModel } from './image.model';

@Component({
    selector: 'app-dashboard-item',
    standalone: true,
    imports: [],
    templateUrl: './dashboard-item.component.html',
    styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
    /* ----- Angular < 17 -----------
    @Input({required: true}) image!: ImageModel;
    @Input({required: true}) title!: string;
    ------------------------------------ */

    /* ------- Angular Signals - 17+ */
    image = input.required<ImageModel>();
    title = input.required<string>();
}
