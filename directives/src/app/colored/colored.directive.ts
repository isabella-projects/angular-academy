import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appColored]',
})
export class ColoredDirective implements OnInit {
    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    }

    @HostBinding('className') classToggle: string;

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.classToggle = 'advanced';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.classToggle = '';
    }
}
