import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstSubComponent } from './first-sub.component';
import { FakeUserListComponent } from './fake-user-list/fake-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSubComponent,
    FakeUserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
