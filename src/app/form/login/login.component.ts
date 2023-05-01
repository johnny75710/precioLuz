import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { Login } from '../interfaces/login.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //Variables
  error: string = '';
  loginForm: FormGroup = new FormGroup({})
  resetPassword: boolean = false;
  linkMessage: string = '¿Contraseña olvidada?'

  //Emisor de evento para cambiar el formulario de login a reseteo de contraseña
  @Output() resetOrLogin = new EventEmitter<boolean>();

  constructor(private formService: FormService, private router:Router){}

  //Al iniciar el componente se crea el formulario
  ngOnInit(): void {
      this.loginForm = this.createForm();
      if(localStorage.getItem('token')){
        this.router.navigate([''])
      }
  }

  //Método para crear el formulario
  createForm(): FormGroup{
    return new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  //Método para enviar el formulario de login
  login(){
    const formData: Login = {
      UserName: this.loginForm.value.username,
      Password: this.loginForm.value.password
    }
  
    this.formService.login(formData).subscribe(res => {
      if(Object.keys(res.token).length > 0){
        localStorage.setItem("token", res.token);
        // Navegar a la nueva ruta después de guardar el token
        this.router.navigate(['']).then(() => {
          location.reload();
        });
      }
    }, error => this.error = error.error.Message)
  }

  //Método para cambiar el formulario de login a reseteo de contraseña y viceversa
  resetPwd(){
    if(this.resetPassword){
      this.resetPassword = false;
      this.linkMessage = "¿Contraseña olvidada?"

    } else {
      this.resetPassword = true;
      this.linkMessage= 'Ir a Inicio de Sesión'
    }
    this.resetOrLogin.emit(this.resetPassword)
  }
}
