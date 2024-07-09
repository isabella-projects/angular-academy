import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

import { Place, PlaceResponse } from '../place.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-available-places',
    standalone: true,
    templateUrl: './available-places.component.html',
    styleUrl: './available-places.component.css',
    imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
    places = signal<Place[] | undefined>(undefined);
    private httpClient = inject(HttpClient);
    private destroyRef = inject(DestroyRef);

    ngOnInit(): void {
        const subscription = this.httpClient
            .get<PlaceResponse>('http://localhost:3000/places')
            .subscribe({
                next: (response) => {
                    console.log(response);
                },
            });

        this.destroyRef.onDestroy(() => {
            subscription.unsubscribe();
        });
    }
}
