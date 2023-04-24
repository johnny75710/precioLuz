import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricesComponent } from './prices/prices.component';



@NgModule({
  declarations: [
    MainDashboardComponent,
    MenuComponent,
    ContentComponent,
    DeleteComponent,
    ConsumptionComponent,
    PricesComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule, 
  ], 
  exports: [
    MainDashboardComponent,
  ], 
  providers: [
    DatePipe,
  ]
})
export class DashboardModule { }
