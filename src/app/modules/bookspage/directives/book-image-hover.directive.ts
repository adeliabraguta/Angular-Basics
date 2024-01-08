import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[bookImageHover]',
})
export class BookImageHoverDirective {
  @Input('bookImageHover') templateClass!: string[];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.templateClass.forEach((styleClass) =>
      this.renderer.addClass(this.elementRef.nativeElement, styleClass),
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.templateClass.forEach((styleClass) =>
      this.renderer.removeClass(this.elementRef.nativeElement, styleClass),
    );
  }
}
