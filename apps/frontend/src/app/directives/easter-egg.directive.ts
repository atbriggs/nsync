import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { easterEgg } from '../utils/data';


@Directive({
  selector: '[neverGonnaGiveYouUp]'
})
export class EasterEggDirective {
    @Output() private neverGonnaGiveYouUp: EventEmitter<easterEgg>= new EventEmitter<easterEgg>();
    private sequence: string[]= []
    private rickRollCode: string= 'rickroll'
    private konamiCode: string[]= [
      'arrowup', 'arrowup',
      'arrowdown', 'arrowdown',
      'arrowleft', 'arrowright',
      'arrowleft', 'arrowright',
      'b', 'a'
    ];
  ​
    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key) {
        this.sequence.push(event.key.toLowerCase());
  ​
        if (this.sequence.length > this.konamiCode.length) {
          this.sequence=[];
        }
       const easterEgg= this.getEasterEgg()
        if (easterEgg) {
          this.neverGonnaGiveYouUp.emit(easterEgg);
          this.sequence=[];
        }
  
      }
    }
  ​
    getEasterEgg(): easterEgg {
      if (this.rickRollCode===this.sequence.join('')){
        return easterEgg.RickRoll;
      }
      if (this.konamiCode.every((code: string, index: number) => code === this.sequence[index])){
        return easterEgg.Konami;
      }
    
    }

}
