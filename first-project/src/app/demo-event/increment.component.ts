import { Component } from '@angular/core';

/**
 * Pour se lier à un événement, il y a 3 étapes (comme en JS pur) :
 * 1) sélectionner l'élément qui nous intéresse (une balise HTML / composant)
 * 2) dire quel événement nous intéresse (click, dblclick, mouseenter, focus, blur, ...).
 * 3) déclarer l'action à réaliser quand l'événement (2) se produit sur l'élément qui nous intéresse (1)
 */

@Component({
  selector: 'app-increment',
  template: `
    <button (click)="decrement()">-</button>
    {{ nb }}
    <button (click)="nb = nb + 1">+</button>
  `,
  styles: [
  ]
})
export class IncrementComponent {
  nb = 0;

  /**
   * Méthode appelé lorsque l'utilisateur clic sur le bouton nommé '-'.
   */
  decrement(): void {
    // Ecritures équivalentes pour la decrementation
    // this.nb = this.nb - 1;
    // this.nb -= 1;
    // this.nb--;
    // --this.nb;

    if (this.nb > 0) {
      this.nb = this.nb - 1;
    } else {
      window.alert('Le nombre ne peut pas être négatif !');
    }
  }
}
