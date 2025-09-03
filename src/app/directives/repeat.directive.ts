import { Parent2Component } from './../components/parent2/parent2.component';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  constructor(
    private _template: TemplateRef<any>,
    private _view: ViewContainerRef
  ) {}

  @Input() set appRepeat(count: number) {
    this._view.clear();
    for (let i = 0; i < count; i++) {
      this._view.createEmbeddedView(this._template);
    }
  }
}
