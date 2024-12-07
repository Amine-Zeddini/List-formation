import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabled]',
})
export class InscriptionDisabledDirective {
  @Input('appInscriptionDisabled') isDisabled: boolean = false;

  @HostBinding('class.link-is-disabled')
  get applyDisabledClass() {
    return this.isDisabled;
  }

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    if (this.isDisabled) {
      event.preventDefault(); 
      console.log('Click event on a disabled element:', event.type);
    } else {
      console.log('Click event on an active element:', event.type);
    }
  }
}
