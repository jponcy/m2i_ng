import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameApiService } from './game-api.service';

import { Game } from './models';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit {

  /** Used to free observables. */
  protected subscriptionHandler$ = new Subject();

  games: Game[];

  // loaded = false; // On pourrait utiliser une variable supplémentaire pour gérer l'état de chargement.

  constructor(private readonly api: GameApiService) { }

  ngOnInit(): void {
    this.retrieveGames();
  }

  sliceWords(value: string): string {
    const words = value.split(' ', 20);
    let result = words.join(' ');

    if (result !== value) {
      result += '...';
    }

    return result;
  }

  /**
   * Appelé lorsque l'utilisateur demande la suppression d'un jeu.
   * @param game Le jeu à supprimer
   */
  onDelete(game: Game): void {
    this.api
        .delete(game.id)
        // .subscribe(() => this.retrieveGames());
        .subscribe(this.retrieveGames); // Cette syntaxe nécessitera que retrieveGames soit déclaré comme un attribut.
  }

  // private retrieveGames(): void {
  private readonly retrieveGames = () => {
    this.games = null;
    this.api
        .getAll()
        .pipe(takeUntil(this.subscriptionHandler$))
        .subscribe(valeurs => this.games = valeurs);
  }
}
