import { Component } from '@angular/core';

@Component({
  selector: 'app-first-sub-component',
  // On devrait utiliser un template inline si le HTML <= 3 lignes.
  template: `
    <button (click)="dec()">-</button>
    {{ toto }}
    <button (click)="inc()">+</button>

    <span *ngIf="toto > 0; else negative">
      Toto : {{ toto }}² = {{ square(toto) }}
    </span>

    <ng-template #negative>
      <span *ngIf="toto < 0; else zero">
        La valeur est négative.
      </span>
    </ng-template>

    <ng-template #zero>
      <span style="color: red;">Valeur nulle !</span>
    </ng-template>

    <hr>

    <p [ngSwitch]="toto">
      <span *ngSwitchCase="2">Vaut 2</span>
      <span *ngSwitchCase="3">Vaut 3</span>
      <span *ngSwitchDefault>Autre valeur</span>
    </p>

    <ul>
      <li *ngFor="let nom of prenoms; index as i; last as last; first as first; even as even; odd as odd">{{ i + 1 }} {{ nom }}</li>
    </ul>

    <!-- Pour passer un attribut HTML, on pourrait faire ça, mais ça provoque une convertion en string. -->
    <!-- <img src="{{ imageUrl }}"> -->
    <img [src]="imageUrl" alt="Mon image de représentation">

    <button (click)="monAlert()">Mon bouton</button>
  `,
  styles: [
    'li:nth-child(2n + 1) { background-color: pink; }'
  ]
})
export class FirstSubComponent {

  /* private/protected/public (defaut) */imageUrl = 'https://fakeimg.pl/150/';

  toto = 3;

  prenoms = ['Jean', 'Bertrant', 'Sophie', 'Giselle'];

  square(nb: number): number {
    return nb ** 2;
  }

  monAlert(): void {
    // document.querySelector('').addEventListener()
    alert('On a cliqué sur l\'élément');
  }

  inc(): void {
    this.toto++;
  }

  dec(): void {
    this.toto--;
  }
}
