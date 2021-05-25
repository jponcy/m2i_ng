import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFormComponent } from './game-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GameFormComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GameFormComponent]
})
export class GameFormModule { }
