import { TodoApiService } from './../todo-api.service';
import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * Etapes clefs :
 * 1) importation du module ReactiveFormModule (voir todo.module.ts)
 * 2) injection du service FormBuilder (utilisation non obligatoire du builder mais conseillé)
 * 3) création de l'objet représentant notre formulaire (utilisation du form builder)
 * 4) affichage graphique du formulaire (dans la partie HTML)
 * 5) traitements du formulaire
 */

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html'
})
export class TodoCreateComponent implements OnDestroy {

  // Objet reactive form : AbstractControl, FormGroup, FormControl, FormArray
  //                                JSON   - Reactive Form
  // utilisateur = {             // Objet  - FormGroup
  //   nom: null,                // Valeur - FormControl
  //   prenom: null,             // Valeur - FormControl
  //   surnom: null,             // Valeur - FormControl
  //   entreprise: null,         // Valeur - FormControl
  //   telephones: [             // Array  - FormArray
  //     {                       // Objet  - FormGroup
  //       label: 'perso',       // Valeur - FormControl
  //       type: 'mobile',       // Valeur - FormControl
  //       numero: '0606541872'  // Valeur - FormControl
  //     },
  //     {                       // Objet  - FormGroup
  //       label: null,          // Valeur - FormControl
  //       type: 'fixe',         // Valeur - FormControl
  //       numero: '0321009429'  // Valeur - FormControl
  //     }
  //   ]
  // };

  form = this.fb.group({
    // nomDuChamp: options, options peut être :
    // - simplement la valeur par défaut
    // - valeur par défaut + 1 validateur avec un tableau : ['valeurParDefaut', validateur]
    // - valeur par défaut + plusieurs validateurs avec un tableau avec un sous-tableau pour les validateurs
    //   => ['valeurParDefaut', [validateur1, valiteur2, ..., validateurN]]
    label: [null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]+')
    ]],
    description: null
  });

  /** Used to free observables. */
  protected subscriptionHandler$ = new Subject();

  constructor(
      private readonly api: TodoApiService,
      private readonly fb: FormBuilder,
      private readonly router: Router) { }

  get label(): AbstractControl {
    return this.form.controls.label;
  }

  ngOnDestroy(): void {
    this.subscriptionHandler$.next();
    this.subscriptionHandler$.complete();
  }

  onSubmit(): void {
    console.log('Submit', this.form);

    if (this.form.valid) {
      const todo: Todo = this.form.value;

      this.api
          .create(todo)
          .pipe(takeUntil(this.subscriptionHandler$))
          .subscribe(() => this.router.navigate(['/todo'])); // Retour sur la liste en cas de réussite.
    }
  }
}
