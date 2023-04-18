import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  isLoged: boolean = false;
  username: string = ''
  ngOnInit(): void {
    this.dashboard.getUser()
    .subscribe(res => {
      this.username = `Hola, ${res.user}`;
      console.log(res.user)
      this.isLoged = true;
    }, err => {
      this.isLoged = false
      this.username = 'Bienvenido';
    })
  }

  constructor(private dashboard: DashboardService, private router:Router) { 

  }

}
