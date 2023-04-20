import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainDashboardComponent,
    MenuComponent,
    ContentComponent,
    DeleteComponent,
    ConsumptionComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule, 
  ], 
  exports: [
    MainDashboardComponent,
  ]
})
export class DashboardModule { }
