import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private dashboard: DashboardService){}

  //Emitimos los datos al componente padre
  @Output() closeEvent = new EventEmitter<boolean>();
  
  //Declaramos las variables que vamos a utilizar
  closed: boolean = true;

  //Funcion para cerrar el componente
  close(){
    if(this.closed){
      this.closed = false;
      this.closeEvent.emit(this.closed)
    }
  }

  //Funcion para eliminar la cuenta del usuario
  deleteUser(){
    this.dashboard.delUser().subscribe( res => {
      localStorage.removeItem('token');
      if(this.closed){
      this.closed = false;
      this.closeEvent.emit(this.closed)
      window.location.reload()
    }
    }, err => {})
  }
}
