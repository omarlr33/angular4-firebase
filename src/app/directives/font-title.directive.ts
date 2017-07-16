import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontTitle]'
})
export class FontTitleDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.fontSize = '1.3em'
   }

}
