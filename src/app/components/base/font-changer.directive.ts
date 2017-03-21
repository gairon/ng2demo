import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const DEFAULT_FONT_SIZE = 24;

@Directive({
    selector: '[fontChanger]'
})
export class FontChangerDirective {
    @Input('fontChanger') fontChanger;

    private elNode: HTMLElement;
    private oldFontSize: string;

    constructor(el: ElementRef) {
        this.elNode = el.nativeElement;
    }

    @HostListener('mousedown') onMouseDown() {
        const fontSize = this.fontChanger || DEFAULT_FONT_SIZE;

        this.oldFontSize = this.elNode.style.fontSize;
        this.elNode.style.fontSize = `${fontSize}px`;
    }

    @HostListener('mouseup') onMouseUp() {
        this.elNode.style.fontSize = this.oldFontSize;
    }
}
