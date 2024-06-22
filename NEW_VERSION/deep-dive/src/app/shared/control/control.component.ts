import {
    Component,
    /* ContentChild ,*/
    ElementRef,
    ViewEncapsulation,
    contentChild,
    input,
} from '@angular/core';

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
    /* ----------- Old way with decorators -------------
    @HostBinding('class') className = 'control';
    @HostListener('click') onClick() {
        console.log('Clicked!');
    }
    --------------------------------- */

    label = input.required<string>();

    /* ------------ Angular < 17 decorator way ---------------------------
    @ContentChild('input') private control?: ElementRef<
        HTMLInputElement | HTMLTextAreaElement
    >;
    ---------------------------------------------------------------------- */

    /* --- Signal way available from Angular 17+ --- */
    private control =
        contentChild.required<
            ElementRef<HTMLInputElement | HTMLTextAreaElement>
        >('input');

    onClick() {
        console.log('Clicked!');
        console.log(this.control());
    }
}
