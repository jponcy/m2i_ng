import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListModule } from './game-list/game-list.module';
import { SharedModule } from './shared/shared.module';
import { GameDetailsModule } from './game-details/game-details.module';
import { GameFormModule } from './game-form/game-form.module';

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
    AppRoutingModule,
    GameListModule,
    SharedModule,
    GameDetailsModule,
    GameFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
