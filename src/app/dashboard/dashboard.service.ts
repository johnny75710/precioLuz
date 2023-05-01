import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //Endpoints
  private urlUser = 'http://localhost:3000/user'
  private urlPrices = 'http://localhost:3000/prices'
  
  //Guardamos el token del usuario en una variable si existe
  private user : string | null = localStorage.getItem('token');
  
  //Creamos las cabeceras para las peticiones mandando el token del usuario para que el servidor compruebe si es valido
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user}`
    })
  };
  

  constructor(private http: HttpClient) {}

  //Funcion para autentificar al usuario a traves del token
  getUser(){
    return this.http.get<any>(this.urlUser, this.httpOptions)
  }

  //Funcion para eliminar la cuenta del usuario
  delUser(){
    return this.http.delete<any>(this.urlUser, this.httpOptions)
  }

  //Funcion para actualizar el consumo 
  updateConsumption(formData: any){
    return this.http.put<any>(this.urlUser, formData, this.httpOptions)
  }

  //Funcion para obtener los precios de la luz
  getPrices(date: Object){
    return this.http.post<any>(this.urlPrices, date)
  }

  //Funcion para obtener los precios de la luz del usuario logeadoContent 
  getLogedPrices(user: string){
    return this.http.get<any>(`${this.urlPrices}/${user}`)
  }
}
