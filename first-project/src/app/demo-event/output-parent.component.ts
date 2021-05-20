import { Component } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  template: `
    <h2>Composant parent</h2>

    <p class="erreur">{{ erreur }}</p>

    <app-output-enfant
      (changementDeValeur)="surChangementDeValeurDansLeComposantEnfant($event)"
      (tentativeNegatif)="surNegatif()">
    </app-output-enfant>
  `,
  styles: ['.erreur { color: red; }']
})
export class OutputParentComponent {

  erreur: string;

  surChangementDeValeurDansLeComposantEnfant(valeur: number): void {
    console.log('Il y a eu un changement de valeur.');
    console.log('La nouvelle valeur est : ' + valeur);

    this.erreur = null;
  }

  surNegatif(): void {
    console.log('Le composannt parent a reçu l\'event concernant la tentative de saisie d\'une valeur négative');

    this.erreur = 'Impossible de saisir une valeur négative';
  }
}
