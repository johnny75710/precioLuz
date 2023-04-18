import { transition, trigger, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-forms',
  templateUrl: './main-forms.component.html',
  styleUrls: ['./main-forms.component.css'], 
})

export class MainFormsComponent{

  resetPassword:boolean = false;
  chooseForm: string = 'login'
  title: string = 'Iniciar sesión'
  subtitle: string = 'Introduce usuario y contraseña <br> para acceder'
  
  getForm(e: string) {
    this.chooseForm = e;

    if(this.chooseForm == 'login'){
      this.resetPassword= false;
      this.title = 'Iniciar sesión';
      this.subtitle = 'Introduce usuario y contraseña <br> para acceder'
    } else {
      this.title = 'Registrate'
      this.subtitle = 'Y disfruta de las ventajas de <br> tener una cuenta'
      this.resetPassword= false;
    }
  }

  resetLogin(e:boolean){
    if(!e){
      this.title = 'Iniciar sesión';
      this.subtitle = 'Introduce usuario y contraseña <br> para acceder'
    } else {
      this.title = 'Recupera tu contraseña';
      this.subtitle = 'Para ello debes recordar tu <br> pregunta de seguridad'
    }
  }

}
