import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent{

  //Datos traídos desde el componente padre ContentComponent
  @Input() maxPrice: any = {}
  @Input() minPrice: any = {}
  @Input() mediumPrice: number = 0;
  @Input () allPrices: any = {};
}
