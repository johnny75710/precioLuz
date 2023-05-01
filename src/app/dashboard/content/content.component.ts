import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //Al iniciar el componente inicializamos la funcion para obtener los precios
  ngOnInit(): void {
    this.getPrices();
  }

  //Recibimos los datos del componente padre
  @Input() prices: any = [];
  @Input() isLoged: boolean = false;
  @Input() username: string = '';
  
  //Declaramos las variables que vamos a utilizar
  minPrice: any = {}
  maxPrice: any = {}
  mediumPrice: number = 0;
  allPrices: any = [this.prices.length];

  //Funcion para trabjar con los precios
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
