import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFormsComponent } from './form/main-forms/main-forms.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
// import { DeleteComponent } from './dashboard/delete/delete.component';

//Rutas de la aplicación
const routes: Routes = [
  { path: '', component: MainDashboardComponent, pathMatch: 'full' },
  { path: 'login', component: MainFormsComponent },
  { path: '**', component: MainDashboardComponent}
  // { path: 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
