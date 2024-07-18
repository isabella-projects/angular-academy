import { inject, Injectable, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

import { Place, PlaceResponse } from './place.model';

@Injectable({
    providedIn: 'root',
})
export class PlacesService {
    private httpClient = inject(HttpClient);
    private userPlaces = signal<Place[]>([]);

    loadedUserPlaces = this.userPlaces.asReadonly();

    loadAvailablePlaces() {
        return this.fetchPlaces(
            'http://localhost:3000/places',
            'Something went wrong fetching the available places! Pleas try again later!',
        );
    }

    loadUserPlaces() {
        return this.fetchPlaces(
            'http://localhost:3000/user-places',
            'Something went wrong fetching the favorite places! Pleas try again later!',
        );
    }

    addPlaceToUserPlaces(placeId: string) {
        return this.httpClient.put('http://localhost:3000/user-places', {
            placeId,
        });
    }

    removeUserPlace(place: Place) {}

    private fetchPlaces(url: string, errorMsg: string) {
        return this.httpClient.get<PlaceResponse>(url).pipe(
            map((response) => response.places),
            catchError((_error) => throwError(() => new Error(errorMsg))),
        );
    }
}
