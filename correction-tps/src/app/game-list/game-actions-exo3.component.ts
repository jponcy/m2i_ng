import { Component, Output, EventEmitter } from '@angular/core';

/**
 * index.html
 * => AppComponent
 *    ==> GameListComponent
 *        ===> GameFilterComponent
 *        ===> GameActionsExo3Component
 */
@Component({
  selector: 'app-game-actions-exo3',
  template: `
    <button mat-button (click)="actionClick.emit('follow')">follow</button>
    <button mat-button (click)="actionClick.emit('share')">share</button>
    <button mat-button (click)="actionClick.emit('buy')">buy</button>
  `
})
export class GameActionsExo3Component {

  @Output()
  actionClick = new EventEmitter<string>();

  // onClick(event: MouseEvent): void {
  //   this.actionClick.emit((event.target as HTMLButtonElement).innerText);
  // }
}
