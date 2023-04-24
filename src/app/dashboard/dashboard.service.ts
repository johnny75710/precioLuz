import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urlUser = 'http://localhost:3000/user'
  private urlPrices = 'http://localhost:3000/prices'
  private user : string | null = localStorage.getItem('token');
  
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user}`
    })
  };
  

  constructor(private http: HttpClient) {}

  getUser(){
    return this.http.get<any>(this.urlUser, this.httpOptions)
  }

  delUser(){
    return this.http.delete<any>(this.urlUser, this.httpOptions)
  }

  updateConsumption(formData: any){
    return this.http.put<any>(this.urlUser, formData, this.httpOptions)
  }

  getPrices(date: Object){
    return this.http.post<any>(this.urlPrices, date)
  }
}
