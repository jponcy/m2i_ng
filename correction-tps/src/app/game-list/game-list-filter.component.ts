import { Component, OnInit } from '@angular/core';

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

}
