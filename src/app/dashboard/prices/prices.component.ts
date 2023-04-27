import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent{

  @Input() maxPrice: any = {}
  @Input() minPrice: any = {}
  @Input() mediumPrice: number = 0;
  @Input () allPrices: any = {};
}
