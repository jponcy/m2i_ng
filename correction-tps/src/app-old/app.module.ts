import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameActionsExo2Component } from './game-list/game-actions-exo2.component';
import { GameActionsExo3Component } from './game-list/game-actions-exo3.component';
import { GameActionsExo4Component } from './game-list/game-actions-exo4.component';
import { GameListFilterComponent } from './game-list/game-list-filter.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListFilterComponent,
    GameActionsExo2Component,
    GameActionsExo3Component,
    GameActionsExo4Component
  ],
  imports: [
    // Angular modules.
    BrowserModule,
    BrowserAnimationsModule,

    // Material modules.
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
