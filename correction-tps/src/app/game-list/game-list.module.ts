import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from '../shared/shared.module';
import { GameListFilterComponent } from './game-list-filter.component';
import { GameListComponent } from './game-list.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameListFilterComponent
  ],
  exports: [
    GameListComponent
  ],
  imports: [
    // Angular modules.
    CommonModule,

    // Material modules.
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,

    SharedModule // Importation groupée.
  ]
})
export class GameListModule { }
