import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstSubComponent } from './first-sub.component';
import { FakeUserListComponent } from './fake-user-list/fake-user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { IhmAvanceeComponent } from './ihm-avancee/ihm-avancee.component';
import { MonInputComponent } from './ihm-avancee/mon-input/mon-input.component';
import { GenNumberComponent } from './ihm-avancee/gen-number/gen-number.component';
import { IncrementComponent } from './demo-event/increment.component';
import { CycleDeVieComponent } from './demo-event/cycle-de-vie.component';
import { OutputParentComponent } from './demo-event/output-parent.component';
import { OutputEnfantComponent } from './demo-event/output-enfant.component';
import { InputEnfantComponent } from './demo-event/input-enfant.component';
import { InputParentComponent } from './demo-event/input-parent.component';

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
    InputParentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
