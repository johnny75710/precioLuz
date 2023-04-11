import { Component } from '@angular/core';

@Component({
  selector: 'app-main-forms',
  templateUrl: './main-forms.component.html',
  styleUrls: ['./main-forms.component.css']
})

export class MainFormsComponent {

  chooseForm: string = 'login'
  title: string = 'Iniciar sesión'
  subtitle: string = 'Introduce usuario y contraseña <br> para acceder'

  getForm(e: string) {
    this.chooseForm = e;
    if (this.chooseForm == 'login'){
      this.title = 'Iniciar sesión';
      this.subtitle = 'Introduce usuario y contraseña <br> para acceder'
    } else {
      this.title = 'Empieza ya!'
      this.subtitle = "Disfruta de todas las ventajas de un <br> usuario registrado"
    }
  }

}
