import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List-Formation';
  name = 'Formation web';
  sessions: { id: number, name: string, dateDebut: string, local: string }[] = [];
  constructor() {
    this.sessions = [
      { id: 1, name: 'Formation Web', local: 'Lyon', dateDebut: '11/06/2024' },
      { id: 2, name: 'Formation Mobile', local: 'Paris', dateDebut: '20/06/2024' },
      { id: 3, name: 'Formation web avancée', local: 'Paris', dateDebut: '21/06/2024' },
    ];
  }

  totalParticipants: number = 0; 

  
  updateTotalParticipants(newTotal: number) {
    this.totalParticipants = newTotal;
  }
}
