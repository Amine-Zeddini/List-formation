import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnChanges {
  @Input() appTextColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.color = this.appTextColor;
  }
}
