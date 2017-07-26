import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WindowService } from "./window.service";
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
      WindowService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
