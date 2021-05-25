import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameCategory } from '../../app-old/game-list/models';

import { GameApiService } from '../game-list/game-api.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html'
})
export class GameFormComponent implements OnInit {

  private id: number;

  /** Used to free observables. */
  protected subscriptionHandler$ = new Subject();

  form = this.fb.group({
    title: ['', Validators.required],
    genres: [[]],
    publisher: '',
    description: '',
    developer: '',
    coverImage: ''
  });

  genres$: Observable<GameCategory[]> = this.api.getAllGenres();

  loaded = false;

  constructor(
      private readonly api: GameApiService,
      private readonly fb: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly router: Router) { }

  get title(): string {
    // let result: string = null;

    // if (this.id) {
    //   result = 'Edit ' + this.id;
    // } else {
    //   result = 'New';
    // }

    // return result;

    return this.id ? 'Edit ' + this.id : 'New';
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.productId) { // Si on est en edition
      this.id = +this.route.snapshot.params.productId;
      // Récupération de l'entité (pour initialiser le formulaire).
      this.api
          .getOne(this.id)
          .pipe(takeUntil(this.subscriptionHandler$))
          .subscribe(game => this.form.patchValue(game)) // Initialisation du formulaire.
          .add(() => this.loaded = true);
    } else {                                    // Si on est en création.
      this.loaded = true;
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.id) {
        this.api
            .update(this.id, this.form.value)
            .pipe(takeUntil(this.subscriptionHandler$))
            .subscribe(() => window.alert('Edition réussie'));
      } else {
        this.api
            .create(this.form.value)
            .pipe(takeUntil(this.subscriptionHandler$))
            .subscribe(game => this.router.navigate(['..', game.id, 'edit'], { relativeTo: this.route }));
      }
    }
  }
}
