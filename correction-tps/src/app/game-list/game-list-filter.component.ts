import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameApiService } from './game-api.service';

import { GameCategory } from './models';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html'
})
// Souscribe avec unsubscribe
// export class GameListFilterComponent implements OnInit, OnDestroy {

//   gameCategories: GameCategory[];

//   private subscription: Subscription;

//   constructor(private readonly api: GameApiService) { }

//   ngOnInit(): void {
//     this.subscription = this.api
//         .getAllGenres()
//         .subscribe(valeurs => this.gameCategories = valeurs/*, erreur => console.error(erreur)*/);
//   }

//   ngOnDestroy(): void {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
// }


// Subscribe avec takeUntil (très pratique dès que l'on a plusieurs observables).

// export class GameListFilterComponent implements OnInit, OnDestroy {

//   gameCategories: GameCategory[];

//   /** Used to free observables. */
//   protected subscriptionHandler$ = new Subject();

//   constructor(private readonly api: GameApiService) { }

//   ngOnInit(): void {
//     this.api
//         .getAllGenres()
//         .pipe(takeUntil(this.subscriptionHandler$))
//         .subscribe(valeurs => this.gameCategories = valeurs/*, erreur => console.error(erreur)*/);
//   }

//   ngOnDestroy(): void {
//     this.subscriptionHandler$.next();
//   }
// }


// La troisième méthode pour éviter les fuites mémoires, c'est de ne pas faire de subscribe.
// Utilisation du pipe async (dans le template HTML).

export class GameListFilterComponent implements OnInit {

  gameCategories$: Observable<GameCategory[]>;

  constructor(private readonly api: GameApiService) { }

  ngOnInit(): void {
    this.gameCategories$ = this.api.getAllGenres();
  }
}
