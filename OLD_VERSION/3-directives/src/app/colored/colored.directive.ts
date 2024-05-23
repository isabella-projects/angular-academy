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
    @Input() defaultPadding: string;
    @Input() hoverPadding: string;

    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.padding') padding: string;
    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
        this.padding = this.defaultPadding;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
        this.padding = this.hoverPadding;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
        this.padding = this.defaultPadding;
    }
}
