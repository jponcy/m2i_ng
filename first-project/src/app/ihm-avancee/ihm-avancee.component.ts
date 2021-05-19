import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  label: string;
  finished: boolean;
}

@Component({
  selector: 'app-ihm-avancee',
  templateUrl: './ihm-avancee.component.html',
  styleUrls: ['./ihm-avancee.component.scss']
})
export class IhmAvanceeComponent implements OnInit {

  todos: Todo[] = [
    { id:  1, label: 'Créer un projet angular', finished: true },
    { id: 10, label: 'Apprendre Angular',       finished: false },
    { id: 10, label: 'Voir les API',       finished: false },
  ];

  valeurs: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onEmpty(value: string, event: string): void {
    window.alert('Click sur le sous-composant : ' + value + ' ; ' + event);
  }

  valeurMoyenne(): number {
    let result = null;

    // if (this.valeurs.length) {
    //   result = this.valeurs.reduce((acc, e) => acc + e) / this.valeurs.length;
    // }

    if (this.valeurs.length) {
      result = 0;

      for (const val of this.valeurs) {
        result += val;
      }

      result /= this.valeurs.length;
    }

    return result;
  }

  onNbGeneration(nb: number): void {
    this.valeurs.push(nb);
  }
}
