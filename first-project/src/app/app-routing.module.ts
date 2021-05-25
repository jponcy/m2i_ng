/**
 * Etapes pour définir mon routing
 * 1) Créer un module de routing (pas obligatoire mais vivement conseillé ; ce module)
 * 2) Définir les routes
 * 3) Importer/utiliser les routes
 * 4) Exporter les routes
 * 5) Importer/utiliser le module de routing (s'utilise dans AppModule)
 * 6) Placer le composant router-outlet (dans app.component.html pour notre exemple)
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputParentComponent } from './demo-event/input-parent.component';
import { OutputParentComponent } from './demo-event/output-parent.component';
import { IhmAvanceeComponent } from './ihm-avancee/ihm-avancee.component';
import { NotFoundComponent } from './shared/not-found.component';
import { TodoCreateComponent } from './todo/todo-form/todo-create.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list.component';

// 2) Définir les routes
const routes: Routes = [
  { path: 'todo/new',             component: TodoCreateComponent },
  { path: 'todo/:id/edit',        component: TodoFormComponent },
  { path: 'todo',                 component: TodoListComponent },
  { path: 'exemple-ihm-avancee',  component: IhmAvanceeComponent },
  { path: 'exemple-input',        component: InputParentComponent },
  { path: 'exemple-output',       component: OutputParentComponent },

  // Route par défaut.
  { path: '',                     redirectTo: 'todo', pathMatch: 'full' },

  // Affichage d'un composant NotFound sur demande de toute autre URL (que celles définies ci-dessus).
  { path: '**',                   component: NotFoundComponent}
];

// 1) Créer un module de routing (pas obligatoire mais vivement conseillé ; ce module)
@NgModule({
  // 3) Importer/utiliser les routes
  imports: [
    RouterModule.forRoot(routes)
  ],
  // 4) Exporter les routes
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
