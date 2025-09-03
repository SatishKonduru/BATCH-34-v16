import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  constructor(
    private _template: TemplateRef<any>,
    private _view: ViewContainerRef
  ) {}
  @Input() set appIfNot(condition: boolean) {
    if (!condition) {
      this._view.createEmbeddedView(this._template);
    } else {
      this._view.clear();
    }
  }
}
