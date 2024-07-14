import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, throwError } from 'rxjs';

import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

import { Place, PlaceResponse } from '../place.model';

@Component({
    selector: 'app-user-places',
    standalone: true,
    templateUrl: './user-places.component.html',
    styleUrl: './user-places.component.css',
    imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
    places = signal<Place[] | undefined>(undefined);
    isFetching = signal<boolean>(false);
    error = signal<string>('');

    private httpClient = inject(HttpClient);
    private destroyRef = inject(DestroyRef);

    ngOnInit(): void {
        this.isFetching.set(true);

        const subscription = this.httpClient
            .get<PlaceResponse>('http://localhost:3000/user-places')
            .pipe(
                map((response) => response.places),
                catchError((_error) =>
                    throwError(
                        () =>
                            new Error(
                                'Something went wrong! Try again later..',
                            ),
                    ),
                ),
            )
            .subscribe({
                next: (places) => {
                    this.places.set(places);
                },
                error: (error: Error) => {
                    this.error.set(error.message);
                },
                complete: () => this.isFetching.set(false),
            });

        this.destroyRef.onDestroy(() => {
            subscription.unsubscribe();
        });
    }
}
