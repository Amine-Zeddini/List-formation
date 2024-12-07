import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { FirstSessionComponent } from './first-session/first-session.component';
import { FormsModule } from '@angular/forms';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import {  InscriptionDisabledDirective } from './inscription-disabled-directive.directive';
import { TextColorDirective } from './text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    FirstSessionComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    TextColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
