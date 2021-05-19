import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { allGameCategories, GameCategory } from './models';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styles: [
  ]
})
export class GameListFilterComponent implements OnInit {

  gameCategories: GameCategory[] = allGameCategories;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeName(event: any) {
    // ...
    console.log('Change event', event);

    const value = event.target.value;
  }


  // enum ActionType {
  //   FOLLOW, SHARE, BUY
  // }


  // @Output()
  // follow = new EventEmitter();

  // @Output()
  // share = new EventEmitter();

  // @Output()
  // buy = new EventEmitter();

  // // ----
  // @Output()
  // action = new EventEmitter<string>(); // Valeurs possibles : follow, share, buy
  // // ----
  // @Output()
  // actionExo4 = new EventEmitter<ActionType>(); // Valeurs possibles : follow, share, buy
}
