import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PostComponent } from './post/post.component';

import { AppService } from './app.service';

import { Post } from './post.model';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [PostComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    posts = signal<Post[] | undefined>(undefined);
    error = signal<string>('');

    private postsService = inject(AppService);
    private destroyRef = inject(DestroyRef);

    ngOnInit(): void {
        const subscription = this.postsService.fetchPosts().subscribe({
            next: (post) => {
                this.posts.set(post);
            },
            error: (error: Error) => {
                this.error.set(error.message);
            },
            complete: () => console.log('All posts fetched successfully!'),
        });
        this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }
}
