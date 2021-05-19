import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gen-number',
  template: `
    Dernier nombre généré :
    <span class="number">{{ nb }}</span>
  `
})
export class GenNumberComponent {

  /**
   * Envoie la dernière valeur générée.
   */
  @Output()
  generation = new EventEmitter<number>();

  nb: number;

  constructor() {
    setInterval(this.genererNombre, 1_000);
  }

  private genererNombre = () => {
    this.nb = Math.floor(Math.random() * 1000);

    this.generation.emit(this.nb);
  }
}
