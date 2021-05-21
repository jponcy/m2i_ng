import { Component } from '@angular/core';
import { of, Subject } from 'rxjs';
import { delay, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observer-bases',
  template: `
    La valeur est : {{ valeur }}.
  `
})
export class BasesComponent {

  valeur: number;

  constructor() {
    // this.premierExempleSujetAvecObserver();

    this.exempleOperateurRxjs();
  }


  private exempleOperateurRxjs(): void {
    // Création rapide d'un sujet envoyant une liste de valeurs.
    const subject = of(1, 2, -6, 0, 5, 3, -4);

    // Ajout d'opateurs RXJS.
    subject
        .pipe(delay(1_000))
        .pipe(
          tap(v => console.log('valeur reçu: ' + v)),
          filter(v => v > 1),
          tap(v => console.log('après filtrage: ' + v)),
          map(v => v - 2),
        )

        // Enregistrement d'un observer.
        .subscribe(valeur => {
          console.log(valeur);
          this.valeur = valeur;
        });
  }


  private premierExempleSujetAvecObserver(): void {
    const sujet = new Subject<number>();

    sujet.next(42);
    sujet.next(5);
    sujet.next(4);

    sujet.subscribe(
      /* next */      valeur => console.log(valeur),
      /* error */     erreur => console.error('J\'ai reçu une erreur', erreur),
      /* completed */ ()     => console.log('Fin de l\'observable')
    );

    sujet.next(1);
    sujet.next(50);
    sujet.error('Erreur inconnue');
    sujet.complete();

    /**
     * 1
     * 50
     * J'ai reçu une erreur Erreur inconnue
     *  = Fin de l'observable. = non affiché à cause de l'erreur
     */
  }
}
