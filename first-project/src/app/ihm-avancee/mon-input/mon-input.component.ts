import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mon-input',
  templateUrl: './mon-input.component.html',
  styleUrls: ['./mon-input.component.scss']
})
export class MonInputComponent {

  /** Le label à mettre sur l'interface graphique. */
  @Input()
  label: string;

  @Output()
  empty = new EventEmitter<string>();

  onBtnClick(event: MouseEvent): void {
    event.preventDefault();

    this.empty.emit(this.label);
    // window.alert('Click');
  }
}
