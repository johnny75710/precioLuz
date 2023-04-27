import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-loged-prices',
  templateUrl: './loged-prices.component.html',
  styleUrls: ['./loged-prices.component.css']
})

export class LogedPricesComponent implements OnInit {

  @Input() isLoged: boolean = false;
  @Input() user: string = '';
  @Input() allPrices: any;
  @Input() mediumPrice: number = 0;

  consumption: number = 0;
  mediumMax: number = 0
  mediumMin: number = 0
  mediumMed: number = 0

  constructor(private dashboard: DashboardService) { }

  async ngOnInit(): Promise<void> {
    try {
      const res = await this.dashboard.getLogedPrices(this.user).toPromise();
      this.consumption = res.WATS;
    } catch (err) {
      console.log(err);
    }

    this.getPrices();
  }

  getPrices(){
   
   let totalMax = 0;
   let totalMin = 0;

   for (let i = 0; i < this.allPrices.length; i++) {
    if(this.allPrices[i].Price >= this.mediumPrice){
      totalMax = totalMax + 1
      this.mediumMax = this.mediumMax + this.allPrices[i].Price
    }

    if(this.allPrices[i].Price < this.mediumPrice){
      totalMin = totalMin + 1
      this.mediumMin = this.mediumMin + this.allPrices[i].Price
    }
   }

   this.mediumMax = (this.mediumMax/totalMax)*this.consumption
   this.mediumMin = (this.mediumMin/totalMin)*this.consumption
   this.mediumMed = this.mediumPrice * this.consumption;
  }


}