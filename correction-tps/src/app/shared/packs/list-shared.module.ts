import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const mods: any[] = [
  MatCardModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: mods,
  exports: mods
})
export class ListSharedModule {}
