import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})

export class SwitcherComponent implements OnInit {

  //Variables
  isLoginActive: boolean = true;
  userChoice: string = 'login';

  //Evento para cambiar el formulario de login a signup
  @Output() formEvent = new EventEmitter<string>();

  //Método para cambiar el formulario de login a signup y viceversa
  toggleActive(activeElement: string): void {
    if (activeElement === 'login') {
      this.isLoginActive = true;
      this.userChoice = 'login'
    } else {
      this.isLoginActive = false;
      this.userChoice = 'signup'
    }
    this.formEvent.emit(this.userChoice)
  }

  //Cuando se inicializa el componente se emite el evento con el componente login por defecto

  ngOnInit(): void {
    this.formEvent.emit(this.userChoice)

  }
}


