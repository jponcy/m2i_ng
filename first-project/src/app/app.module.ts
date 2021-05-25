import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CycleDeVieComponent } from './demo-event/cycle-de-vie.component';
import { IncrementComponent } from './demo-event/increment.component';
import { InputEnfantComponent } from './demo-event/input-enfant.component';
import { InputParentComponent } from './demo-event/input-parent.component';
import { OutputEnfantComponent } from './demo-event/output-enfant.component';
import { OutputParentComponent } from './demo-event/output-parent.component';
import { FakeUserListComponent } from './fake-user-list/fake-user-list.component';
import { FirstSubComponent } from './first-sub.component';
import { GenNumberComponent } from './ihm-avancee/gen-number/gen-number.component';
import { IhmAvanceeComponent } from './ihm-avancee/ihm-avancee.component';
import { MonInputComponent } from './ihm-avancee/mon-input/mon-input.component';
import { BasesComponent } from './observers/bases.component';
import { UtilisationServiceComponent } from './observers/utilisation-service.component';
import { TodoModule } from './todo/todo.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstSubComponent,
    FakeUserListComponent,
    IhmAvanceeComponent,
    MonInputComponent,
    GenNumberComponent,
    IncrementComponent,
    CycleDeVieComponent,
    OutputParentComponent,
    OutputEnfantComponent,
    InputEnfantComponent,
    InputParentComponent,
    BasesComponent,
    UtilisationServiceComponent
  ],
  imports: [
    // Angular.
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // Ajout de la possibilité de réaliser des requêtes HTTP.

    // Material.
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,

    // Nos modules.
    AppRoutingModule, // 5) Routing - Importer/utiliser le module de routing (s'utilise dans AppModule)
    TodoModule, SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
