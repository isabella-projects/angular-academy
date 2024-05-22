import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appColored]',
})
export class ColoredDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;
    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }
}
