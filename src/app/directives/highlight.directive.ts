import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private highlightColor;
  @Input() set appHighlight(color: string | '') {
    this.highlightColor = color?.trim() || 'yellow';
  }
  constructor(private _el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this._el.nativeElement.style.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._el.nativeElement.style.backgroundColor = '';
  }
}
