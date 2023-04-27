import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  ngOnInit(): void {
    this.getPrices();
  }

  @Input() prices: any = [];
  @Input() isLoged: boolean = false;
  @Input() user: string = '';

  minPrice: any = {}
  maxPrice: any = {}
  mediumPrice: number = 0;
  allPrices: any = [this.prices.length];

  getPrices(){

    let calcMedium = 0;
    for (let i = 0; i < this.prices.length; i++) {

      calcMedium = calcMedium + parseFloat(this.prices[i].Price);
      if (this.prices[i].isMIN == 'YES') {
        this.minPrice = this.prices[i]
      }

      if (this.prices[i].isMAX == 'YES') {
        this.maxPrice = this.prices[i]
      }

      this.allPrices[i] = {
        'Hour': this.prices[i].Hour,
        'Price': parseFloat(this.prices[i].Price)
      }
    }

    this.mediumPrice = parseFloat((calcMedium / this.prices.length).toFixed(3));
  }

}
