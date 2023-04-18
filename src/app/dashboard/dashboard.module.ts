import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    MainDashboardComponent,
    MenuComponent,
    ContentComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule
  ], 
  exports: [
    MainDashboardComponent,
  ]
})
export class DashboardModule { }
