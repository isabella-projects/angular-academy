import {
    AfterContentInit,
    Component,
    /* ContentChild ,*/
    ElementRef,
    ViewEncapsulation,
    afterNextRender,
    afterRender,
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
export class ControlComponent implements AfterContentInit {
    /* ----------- Old way with decorators -------------
    @HostBinding('class') className = 'control';
    @HostListener('click') onClick() {
        console.log('Clicked!');
    }
    --------------------------------- */

    /* ------------ Angular < 17 decorator way ---------------------------
    @ContentChild('input') private control?: ElementRef<
        HTMLInputElement | HTMLTextAreaElement
    >;
    ---------------------------------------------------------------------- */

    label = input.required<string>();

    constructor() {
        /* New Angular 16+ Lifecycle Hooks
        afterRender(() => {
            console.log('AFTER RENDER');
        });

        afterNextRender(() => {
            console.log('AFTER NEXT RENDER');
        });
        ----------------------------------- */
    }

    /* --- Signal way available from Angular 17+ --- */
    private control =
        contentChild.required<
            ElementRef<HTMLInputElement | HTMLTextAreaElement>
        >('input');

    ngAfterContentInit(): void {
        console.log(this.control());
    }

    onClick() {
        console.log('Clicked!');
        console.log(this.control());
    }
}
