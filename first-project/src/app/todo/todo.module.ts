import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list.component';
import { TodoCreateComponent } from './todo-form/todo-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoCreateComponent
  ],
  exports: [ // Elements rendus disponibles à l'utilisation direct par les modules important celui-ci.
    TodoListComponent, TodoFormComponent, TodoCreateComponent
  ],
  imports: [ // Importation des modules nécessaires.
    CommonModule, // Importation de ngIf, ngFor, ...

    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
