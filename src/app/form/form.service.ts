import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Signup } from './interfaces/signup.interfaces'
import { Observable } from 'rxjs';
import { Login } from './interfaces/login.interfaces';
import { ResponseL } from './interfaces/responseL.interface';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private urlSignup = 'http://localhost:3000/signup'
  private urlLogIn = 'http://localhost:3000/login'
  private resetPwd = 'http://localhost:3000/reset'

  constructor( private http: HttpClient, ) { }

  signup(datosForm: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.urlSignup, datosForm)
  }

  login(formData: Login): Observable<ResponseL>{
    return this.http.post<ResponseL>(this.urlLogIn, formData)
  }  

  reset(formData: any): Observable<any>{
    return this.http.post<any>(this.resetPwd, formData)
  }
}
