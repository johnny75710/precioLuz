import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    // Importamos los módulos que vamos a usar en nuestra aplicación
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormModule,  
        DashboardModule
    ]
})
export class AppModule { }
