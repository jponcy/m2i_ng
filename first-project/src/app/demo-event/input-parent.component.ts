import { Component } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  template: `
    <h2>Composant parent</h2>

    <app-input-enfant></app-input-enfant>
    <app-input-enfant couleur="blue"></app-input-enfant>
    <app-input-enfant [couleur]="vert"></app-input-enfant>
  `
})
export class InputParentComponent {
  vert = 'green';
}
