import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    NotFoundComponent
  ],
  declarations: [NotFoundComponent]
})
export class SharedModule { }
