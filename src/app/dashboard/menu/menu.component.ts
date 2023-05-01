import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  //Declaramos las variables que vamos a utilizar
  delete: boolean = false;
  consumption: boolean = false;

  //Recibimos los datos del usuario desde el componente padre
  @Input() username: string ='';
  @Input() isLoged: boolean = false;
  
  //Funcion para mostrar el componente para eliminar cuenta del usuario. Se muestra como pop-up
  showDel(){
    if(this.delete){
      this.delete = false;
    } else{
      this.delete = true;
    }
  }
  //
  showConsumption(){
    if(this.consumption){
      this.consumption = false;
    } else{
      this.consumption = true;
    }
  }
  //Funcion para cerrar el componente de eliminar cuenta
  getClose(e: boolean){
    if(!e){
      this.delete = false;
    }
  }
  //Funcion para cerrar el componente de consumo
  getConsumption(e: boolean){
    if(!e){
      this.consumption = false;
    }
  }
  //Funcion para cerrar sesion  
  logOut() {
    localStorage.removeItem('token');
    location.reload
    window.location.reload()
  }
    
}
