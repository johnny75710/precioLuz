import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  //Variables
  today = new Date();
  date: Object = {};

  isLoged: boolean = false;
  username: string = '';
  pricesUp: boolean = false;
  prices: any = [];

  constructor(private dashboard: DashboardService, private datePipe: DatePipe) {

  }

  //Al iniciar el componente, inicializamos las funciones
  ngOnInit(): void {
    this.checkLogin();
    this.checkPrices();
  }

  //Funcion para comprobar si el usuario esta logeado
  checkLogin(){
    if (!localStorage.getItem('token')) {
      this.isLoged = false;
      this.username = 'Bienvenido';
    } else {
      this.dashboard.getUser().subscribe(
        res => {
          this.username = `${res.user}`;
          this.isLoged = true;
        },
        err => {
          this.isLoged = false;
          this.username = 'Bienvenido';
        }
      );
    }
  }

  //Funcion para comprobar los precios de la luz
  checkPrices(){
    this.date = {
      date: this.datePipe.transform(this.today, 'dd/MM/yyyy'),

    }

    this.dashboard.getPrices(this.date).subscribe(
      res => {
        this.prices = res.Data;
        this.pricesUp = true;
      }, err => {
        this.pricesUp = false
      }
    )
  }

}