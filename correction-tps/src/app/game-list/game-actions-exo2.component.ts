import { Component, Output, EventEmitter } from '@angular/core';

/**
 * index.html
 * => AppComponent
 *    ==> GameListComponent
 *        ===> GameFilterComponent
 *        ===> GameActionsExo2Component
 */
@Component({
  selector: 'app-game-actions-exo2',
  template: `
    <button mat-button (click)="follow.emit()">follow</button>
    <button mat-button (click)="share.emit()">share</button>
    <button mat-button (click)="onBuyClick()">buy</button>
  `
})
export class GameActionsExo2Component {

  @Output()
  follow = new EventEmitter<void>();

  @Output()
  share = new EventEmitter<void>();

  @Output()
  buy = new EventEmitter<void>();

  onBuyClick(): void {
    this.buy.emit();
  }
}
