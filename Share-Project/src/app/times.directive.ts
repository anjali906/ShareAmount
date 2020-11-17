import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  @Input('appTimes') set render(times: Number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {})
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef

  ) { }

}
