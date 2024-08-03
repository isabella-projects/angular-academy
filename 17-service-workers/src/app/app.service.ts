import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, of } from 'rxjs';

import { API_URL, Post } from './post.model';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private readonly POST_API = API_URL;
    private httpClient = inject(HttpClient);
    error = signal<string>('');

    fetchPosts() {
        return this.httpClient.get<Post[]>(this.POST_API).pipe(
            catchError((error) => {
                this.error.set(error.message);
                return of([]);
            }),
        );
    }
}
