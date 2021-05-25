import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent
  ],
  exports: [ // Elements rendus disponibles à l'utilisation direct par les modules important celui-ci.
    TodoListComponent, TodoFormComponent
  ],
  imports: [ // Importation des modules nécessaires.
    CommonModule, // Importation de ngIf, ngFor, ...

    RouterModule,
    MatButtonModule
  ]
})
export class TodoModule { }
