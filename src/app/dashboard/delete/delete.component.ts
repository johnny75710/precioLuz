import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private dashboard: DashboardService, private router:Router){}

  @Output() closeEvent = new EventEmitter<boolean>();
  
  closed: boolean = true;

  close(){
    if(this.closed){
      this.closed = false;
      this.closeEvent.emit(this.closed)
    }
  }

  deleteUser(){
    this.dashboard.delUser().subscribe( res => {
      localStorage.removeItem('token');
      this.router.navigate(['login'])
    }, err => console.log(err))
    localStorage.removeItem('token')
  }
}
