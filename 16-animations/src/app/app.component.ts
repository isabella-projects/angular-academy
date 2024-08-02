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
            transition('normal => highlighted', animate(300)),
            transition('highlighted => normal', animate(800)),
        ]),
    ],
})
export class AppComponent {
    state: string = 'normal';
    list: string[] = ['Milk', 'Sugar', 'Bread'];

    onAnimate(): void {
        this.state == 'normal'
            ? (this.state = 'highlighted')
            : (this.state = 'normal');
    }

    onShrink(): void {}

    onAdd(item: string): void {
        this.list.push(item);
    }

    onDelete(item: string): void {
        this.list.splice(this.list.indexOf(item), 1);
    }
}
