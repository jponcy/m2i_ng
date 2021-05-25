import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { GameApiService } from '../game-list/game-api.service';
import { Game } from '../game-list/models';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html'
})
export class GameDetailsComponent implements OnInit {

  game$: Observable<Game>;

  constructor(
      private readonly api: GameApiService,
      private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.productId;

    this.game$ = this.api.getOne(id);
  }
}
