import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFormComponent } from './game-form.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GameFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    SharedModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [GameFormComponent]
})
export class GameFormModule { }
