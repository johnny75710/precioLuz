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

  today = new Date();
  date: Object = {};

  isLoged: boolean = false;
  username: string = '';
  pricesUp: boolean = false;
  prices: any = ''

  constructor(private dashboard: DashboardService, private datePipe: DatePipe) {

  }

  ngOnInit(): void {

    this.checkLogin();

    this.checkPrices();
  }

  checkLogin(){
    if (!localStorage.getItem('token')) {
      console.log('no token')
      this.isLoged = false;
      this.username = 'Bienvenido';
    } else {
      this.dashboard.getUser().subscribe(
        res => {
          this.username = `Hola, ${res.user}`;
          this.isLoged = true;
        },
        err => {
          this.isLoged = false;
          this.username = 'Bienvenido';
          console.log(err)
        }
      );
    }
  }

  checkPrices(){
    this.date = {
      date: this.datePipe.transform(this.today, 'dd/MM/yyyy'),

    }

    this.dashboard.getPrices(this.date).subscribe(
      res => {
        this.prices = res.Data;
        console.log(this.prices)
        this.pricesUp = true;
      }, err => {
        console.log(err)
        this.pricesUp = false
      }
    )
  }

}