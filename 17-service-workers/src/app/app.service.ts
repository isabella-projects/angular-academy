import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, of } from 'rxjs';

import { API_URL, Post } from './post.model';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private readonly POST_API = API_URL;
    private httpClient = inject(HttpClient);

    fetchPosts() {
        return this.httpClient.get<Post[]>(this.POST_API).pipe(
            catchError((error) => {
                console.error('Error while fetching: ', error);
                return of([]);
            }),
        );
    }
}
