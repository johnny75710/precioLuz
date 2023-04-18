import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urlUser = 'http://localhost:3001/user'
  private user : string | null = localStorage.getItem('token');
  
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user}`
    })
  };
  

  constructor(private http: HttpClient) { 

  }

  getUser(){
    return this.http.get<any>(this.urlUser, this.httpOptions)
  }

  delUser(){
    return this.http.delete<any>(this.urlUser, this.httpOptions)
  }

}
