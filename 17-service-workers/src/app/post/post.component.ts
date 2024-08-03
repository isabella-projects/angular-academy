import { Component, input } from '@angular/core';

@Component({
    selector: 'app-post',
    standalone: true,
    imports: [],
    templateUrl: './post.component.html',
    styleUrl: './post.component.css',
})
export class PostComponent {
    title = input.required<string>();
    content = input.required<string>();
}
