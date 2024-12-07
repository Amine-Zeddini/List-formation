import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.scss'],
})
export class SessionItemComponent {
  @Input() name!: string;
  @Input() local!: string;
  @Input() description!: string;
  @Input() date!: Date;
  @Input() nbrParticipant: number = 0;
  @Output() inscription = new EventEmitter<number>();
  
  onModeChange() {
    this.couleur = this.selectedMode === 'En ligne' ? 'green' : 'red';
  }
  
  maxParticipants: number = 20;
  couleur: string = 'blue'; 
  selectedMode: string = ''; 
  formateurs: string[] = ['Formateur 1', 'Formateur 2', 'Formateur 3'];
  selectedFormateur: string = ''; 

  get placesRestantes(): number {
    return this.maxParticipants - this.nbrParticipant;
  }

  inscrire() {
    if (this.nbrParticipant < this.maxParticipants) {
      this.nbrParticipant++;
      this.inscription.emit(this.nbrParticipant);
    } else {
      console.log('Session complète');
    }
  }

  onFormateurSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFormateur = selectElement.value;
  }
}
