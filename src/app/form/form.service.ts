import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from "./interfaces/user.interfaces"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private url = 'http://localhost:3001/user'

  constructor( private http: HttpClient ) { }

  signup(datosForm: User): Observable<User> {
    return this.http.post<User>(this.url, datosForm)
  }
}
