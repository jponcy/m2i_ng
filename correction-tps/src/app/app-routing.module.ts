import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameDetailsComponent } from './game-details/game-details.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { NotFoundComponent } from './shared/not-found.component';

const routes: Routes = [
  { path: 'product/new',          component: GameFormComponent },
  { path: 'product/:productId/edit', component: GameFormComponent },
  { path: 'product/:productId',   component: GameDetailsComponent },
  { path: 'product',              component: GameListComponent },
  { path: '',                     redirectTo: 'product', pathMatch: 'full' },
  { path: '**',                   component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
