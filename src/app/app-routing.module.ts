import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFormsComponent } from './form/main-forms/main-forms.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: '', component: MainDashboardComponent, pathMatch: 'full' },
  { path: 'login', component: MainFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
