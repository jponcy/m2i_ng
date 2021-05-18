import { Component } from '@angular/core';

const donnees = [
  { id: 1, nom: 'DUPONT', prenom: 'Jean', dateDeNaissance: new Date() },
  { id: 2, nom: 'dupond', prenom: 'Charline', dateDeNaissance: new Date() },
  { id: 3, nom: 'Hereng', prenom: 'Alexandre', dateDeNaissance: new Date() },
];

@Component({
  selector: 'app-fake-user-list',
  templateUrl: './fake-user-list.component.html',
  styles: [
  ]
})
export class FakeUserListComponent {

  utilisateurs: any[];

  constructor() {
    setTimeout(() => this.utilisateurs = donnees, 2_500);
  }

  bonjour(utilisateur, _: MouseEvent): void {
    // _.target
    window.alert('Bonjour ' + utilisateur.prenom);

    // document
    //     .querySelector('button')
    //     .addEventListener('click', function ($event) {
    //       $event.target
    //     });
  }
}
