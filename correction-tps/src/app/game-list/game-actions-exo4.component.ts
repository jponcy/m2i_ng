import { Component, Output, EventEmitter } from '@angular/core';

export enum ActionType {
  // FOLLOW, SHARE, BUY // Par défaut les valeurs sont des nombres : 0, 1, 2
  FOLLOW = 'follow', SHARE = 'share', BUY = 'buy'
}

/**
 * index.html
 * => AppComponent
 *    ==> GameListComponent
 *        ===> GameFilterComponent
 *        ===> GameActionsExo4Component
 */
@Component({
  selector: 'app-game-actions-exo4',
  template: `
    <!-- <button mat-button (click)="actionClick.emit(types.FOLLOW)">follow</button>
    <button mat-button (click)="actionClick.emit(types.SHARE)">share</button>
    <button mat-button (click)="actionClick.emit(types.BUY)">buy</button> -->

    <button mat-button *ngFor="let t of typeValues" (click)="actionClick.emit(t)">
      {{ t }}
    </button>
  `
})
export class GameActionsExo4Component {

  // types = ActionType;

  typeValues = Object.values(ActionType);

  @Output()
  actionClick = new EventEmitter<ActionType>();
}
