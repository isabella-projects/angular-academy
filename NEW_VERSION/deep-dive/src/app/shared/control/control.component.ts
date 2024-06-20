import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
    selector: 'app-control',
    standalone: true,
    imports: [],
    templateUrl: './control.component.html',
    styleUrl: './control.component.css',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'control',
        '(click)': 'onClick()',
    },
})
export class ControlComponent {
    /* ----------- Old way -------------
    @HostBinding('class') className = 'control';
    @HostListener('click') onClick() {
        console.log('Clicked!');
    }
    --------------------------------- */

    label = input.required<string>();

    onClick() {
        console.log('Clicked!');
    }
}
