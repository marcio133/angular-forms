import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent, NavBarComponent, ResetableInputComponent } from './_components';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    ResetableInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
