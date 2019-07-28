import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FormComponent, NavBarComponent, ResetableInputComponent, SelectInputComponent,
  OptionsModalComponent
} from './_components';
import { UtilsService, FirebaseService } from './_services';


// export const options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    ResetableInputComponent,
    SelectInputComponent,
    OptionsModalComponent
  ],
  entryComponents: [
    OptionsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    ModalModule.forRoot()
  ],
  providers: [
    UtilsService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
