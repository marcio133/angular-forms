import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FormComponent, NavBarComponent, ResetableInputComponent, SelectInputComponent,
  OptionsModalComponent
} from './_components';
import { UtilsService, FirebaseService } from './_services';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoaderComponent } from './_components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    ResetableInputComponent,
    SelectInputComponent,
    OptionsModalComponent,
    LoaderComponent
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
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      maxOpened: 1
    })
  ],
  providers: [
    UtilsService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
