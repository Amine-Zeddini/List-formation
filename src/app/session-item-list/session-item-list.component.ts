import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.scss'],
})
export class SessionItemListComponent {
  sessionItems = [
    {
      id: 1,
      name: 'Web',
      track: 'MEAN Stack',
      date: new Date('2023-06-13'),
      local: 'Lyon',
      nbrParticipant: 0,
    },
    {
      id: 2,
      name: 'Mobile',
      track: 'Angular et Ionic',
      date: new Date('2023-08-10'),
      local: 'Paris',
      nbrParticipant: 0,
    },
    {
      id: 3,
      name: 'Web',
      track: 'NodeJS',
      date: new Date('2023-07-20'),
      local: 'Lyon',
      nbrParticipant: 0,
    },
  ];

  totalParticipants: number = 0;

  @Output() totalParticipantsChanged = new EventEmitter<number>(); // Émettre l'événement

  updateTotalParticipants() {
    this.totalParticipants = this.sessionItems.reduce(
      (sum, session) => sum + session.nbrParticipant,
      0
    );
    this.totalParticipantsChanged.emit(this.totalParticipants); // Émettre le total des participants
  }

  handleParticipantChange(index: number, newNbr: number) {
    this.sessionItems[index].nbrParticipant = newNbr;
    this.updateTotalParticipants();
  }
}
