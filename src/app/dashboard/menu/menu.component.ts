import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  delete: boolean = false;
  consumption: boolean = false;

  @Input() username: string ='';
  @Input() isLoged: boolean = false;

  showDel(){
    if(this.delete){
      this.delete = false;
    } else{
      this.delete = true;
    }
  }
  showConsumption(){
    if(this.consumption){
      this.consumption = false;
    } else{
      this.consumption = true;
    }
  }
  getClose(e: boolean){
    if(!e){
      this.delete = false;
    }
  }
  getConsumption(e: boolean){
    if(!e){
      this.consumption = false;
    }
  }
}
