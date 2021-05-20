import { Component, Input } from '@angular/core';

/**
 * Définition/utilisation d'un input : Il y a quelques étapes à réaliser sur les deux acteurs : l'enfant et le parent.
 *
 * Parent : Peut fournir une valeur à l'enfant.
 * Cela se réalise de la même manière que lorsque l'on fournit une valeur à un attribut d'une balise : <img [src]="path" alt="Mon image">
 *
 * Enfant :
 * - 1) Déclarer l'input : @Input (soit sur un attribut, soit sur un setter).
 * - 2) Se servir du paramètre fournit.
 */

@Component({
  selector: 'app-input-enfant',
  template: `
    <div class="box">
      Enfant :
      <br>
      Couleur =
      <span [ngStyle]="{color: couleur}">
        {{ couleur }}
      </span>
    </div>
  `
})
export class InputEnfantComponent {
  @Input()
  couleur: string;
}
