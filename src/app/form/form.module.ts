import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { MainFormsComponent } from './main-forms/main-forms.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SwitcherComponent,
    MainFormsComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MainFormsComponent
  ]
})
export class FormModule { }
