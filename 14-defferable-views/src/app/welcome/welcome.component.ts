import { Component } from '@angular/core';
import { OfferPreviewComponent } from '../offer-preview/offer-preview.component';

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [OfferPreviewComponent],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.css',
})
export class WelcomeComponent {}
