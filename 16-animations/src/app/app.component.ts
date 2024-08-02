import { Component } from '@angular/core';

import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [
        trigger('divState', [
            state(
                'normal',
                style({
                    backgroundColor: 'red',
                    transform: 'translateX(0)',
                }),
            ),
            state(
                'highlighted',
                style({
                    backgroundColor: 'blue',
                    transform: 'translateX(100px)',
                }),
            ),
            transition('normal <=> highlighted', animate(500)),
        ]),
        trigger('wildState', [
            state(
                'normal',
                style({
                    backgroundColor: 'red',
                    transform: 'translateX(0) scale(1)',
                }),
            ),
            state(
                'highlighted',
                style({
                    backgroundColor: 'blue',
                    transform: 'translateX(100px) scale(1)',
                }),
            ),
            state(
                'shrunken',
                style({
                    backgroundColor: 'green',
                    transform: 'translateX(0) scale(0.5)',
                }),
            ),
            transition('normal => highlighted', animate(300)),
            transition('highlighted => normal', animate(800)),
            transition('shrunken <=> *', [
                style({
                    backgroundColor: 'orange',
                    borderRadius: 0,
                }),
                animate(
                    1000,
                    style({
                        borderRadius: '50px',
                    }),
                ),
                animate(500),
            ]),
        ]),
    ],
})
export class AppComponent {
    state: string = 'normal';
    wildState: string = 'normal';

    list: string[] = ['Milk', 'Sugar', 'Bread'];

    onAnimate(): void {
        this.state == 'normal'
            ? (this.state = 'highlighted')
            : (this.state = 'normal');

        this.wildState == 'normal'
            ? (this.wildState = 'highlighted')
            : (this.wildState = 'normal');
    }

    onShrink(): void {
        this.wildState = 'shrunken';
    }

    onAdd(item: string): void {
        this.list.push(item);
    }

    onDelete(item: string): void {
        this.list.splice(this.list.indexOf(item), 1);
    }
}
