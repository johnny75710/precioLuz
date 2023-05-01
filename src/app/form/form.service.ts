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

  //Rutas de la aplicación
  private urlSignup = 'http://localhost:3000/signup'
  private urlLogIn = 'http://localhost:3000/login'
  private resetPwd = 'http://localhost:3000/reset'

  //Constructor
  constructor( private http: HttpClient, ) { }

  //Método para enviar los datos del formulario de registro
  signup(datosForm: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.urlSignup, datosForm)
  }

  //Método para enviar los datos del formulario de login
  login(formData: Login): Observable<ResponseL>{
    return this.http.post<ResponseL>(this.urlLogIn, formData)
  }  

  //Método para enviar los datos del formulario de reset
  reset(formData: any): Observable<any>{
    return this.http.post<any>(this.resetPwd, formData)
  }
}
