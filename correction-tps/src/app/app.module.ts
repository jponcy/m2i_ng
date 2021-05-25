import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameListModule } from './game-list/game-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular modules.
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,       // Ajoute la possibilité de réaliser des requêtes HTTP.

    // Nos sous-modules.
    GameListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
