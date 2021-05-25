import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { GameDetailsComponent } from './game-details.component';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,

    // Material modules.
    MatButtonModule,
  ],
  exports: [GameDetailsComponent]
})
export class GameDetailsModule { }
