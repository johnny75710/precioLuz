import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { MainFormsComponent } from './main-forms/main-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SwitcherComponent,
    MainFormsComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule
  ], 
  exports: [
    MainFormsComponent
  ]
})
export class FormModule { }
