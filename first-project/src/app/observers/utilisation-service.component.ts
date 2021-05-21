import { Component, Inject, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { PremierServiceService } from './premier-service.service';


class Voiture {
  nom: string;

  constructor(
      surnom: string = 'Choupette',
      // Ajouter une visibilité sur un paramètre de constructeur déclare la variable comme une propriété de la classe.
      public readonly nbRoues: number = 4) {
    this.nom = surnom;
  }
} // !Voiture

const v1 = new Voiture();

v1.nom = 'Coxi';
// v1.nbRoues = 3; // Erreur à cause du readonly.

console.log(v1.nom, v1.nbRoues);

// Deuxième exemple :

class Task {
  constructor(
      public nom: string,
      public finished = false,
      public description: string = null) {}
}

const tache1 = new Task('Créer un service');

console.log('La tâche ' + tache1.nom + ' ' + (tache1.finished ? 'finie' : 'pas finie'));

let etat: string;

if (tache1.finished) {
  etat = 'finie';
} else {
  etat = 'pas finie';
}
//   SI finie         ALORS      SINON
etat = tache1.finished ? 'finie' : 'pas finie';

@Component({
  selector: 'app-utilisation-service',
  template: `
    La valeur est {{ value }}.
  `
})
export class UtilisationServiceComponent implements OnInit {
  // Il est possible de gérer l'injection du service manuellement avec l'annotation @Inject()
  // On se contente la plupart du temps de la résolution automatique d'Angular qui se réalise grace au typage.
  // constructor(service: PremierServiceService) { }

  value: number;

  constructor(private readonly service: PremierServiceService) { }

  ngOnInit(): void {
    this.service
        .getValues()
        .subscribe(value => this.value = value);
  }
}
