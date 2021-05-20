import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Pour utiliser le système d'output, il y a plusieurs étapes mais aussi 2 acteurs : composant parent, composant enfant.
 *
 * Composant parent :
 * - garde la même logique que lors de l'utilisation d'un événement déjà existant (voir IncrementComponent pour un exemple).
 *
 * Composant enfant :
 * - 1) déclarer les événements (tunnel de communication) : @Output
 * - 2) émission d'événements : méthode emit
 */

@Component({
  selector: 'app-output-enfant',
  template: `
    <div>
      <span>Composant enfant : </span>
      <button (click)="decrement()">-</button>
      {{ nb }}
      <button (click)="increment()">+</button>
    </div>
  `,
  styles: [
    'div { border: 1px solid gray; }'
  ]
})
export class OutputEnfantComponent {
  // Étape 1 - déclarer les événements (tunnel de communication)
  @Output()
  changementDeValeur = new EventEmitter<number>();

  /** Prévient que l'utilisateur a tenté de saisir une valeur négative, ce qui n'est pas permis. */
  @Output()
  tentativeNegatif = new EventEmitter<void>();

  nb = 0;

  /**
   * Méthode appelé lorsque l'utilisateur clic sur le bouton nommé '+'.
   */
  increment(): void {
    this.nb = this.nb + 1;

    // Étape 2 - émission d'événements.
    this.changementDeValeur.emit(this.nb);
  }

  /**
   * Méthode appelé lorsque l'utilisateur clic sur le bouton nommé '-'.
   */
  decrement(): void {
    if (this.nb > 0) {
      this.nb = this.nb - 1;

      // Étape 2 - émission d'événements.
      this.changementDeValeur.emit(this.nb);
    } else {
      console.log('Le composant enfant prévient pour la valeur négative');
      this.tentativeNegatif.emit();
    }
  }
}
