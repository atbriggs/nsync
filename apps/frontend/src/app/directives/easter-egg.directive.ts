import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { easterEgg } from '../utils/data';


@Directive({
  selector: '[neverGonnaGiveYouUp]'
})
export class EasterEggDirective {
    @Output() private neverGonnaGiveYouUp: EventEmitter<void>= new EventEmitter<void>();
    private sequence: string[]= []
    private konamiCode: string[]= [
      'arrowup', 'arrowup',
      'arrowdown', 'arrowdown',
      'arrowleft', 'arrowright',
      'arrowleft', 'arrowright',
      'b', 'a'
    ];
    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key) {
        this.sequence.push(event.key.toLowerCase());
  ​
        if (this.sequence.length > this.konamiCode.length) {
          this.sequence.shift();
        }
        if (this.getEasterEgg()) {
          this.neverGonnaGiveYouUp.emit();
        }
  
      }
    }
  ​
    getEasterEgg(): easterEgg {
      if (this.konamiCode.every((code: string, index: number) => code === this.sequence[index])){
        return easterEgg.Konami;
      }
    }



}
