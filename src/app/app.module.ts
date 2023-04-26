import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FidoMaxModule } from 'fido-max-commons/projects/fido-max/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FidoMaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
