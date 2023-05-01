import { ParseSourceFile } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../interfaces/signup.interfaces'
import { FormService } from '../form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //Variables
  signupForm: FormGroup = new FormGroup({})
  house: number = 0;
  error: string = ''; 
  constructor(private formService: FormService){}

  //Al iniciar el componente se crea el formulario
  ngOnInit(): void {
    this.signupForm = this.createForm()
  }

  //Método para crear el formulario
  createForm(): FormGroup{
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      username: new FormControl("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      size: new FormControl("", [Validators.required]),
      consumption: new FormControl("", [Validators.required]),
      security_q: new FormControl("", [Validators.required]),
      security_a: new FormControl("", [Validators.required])
    })
  }

  //Método para enviar el formulario
  signup() {
    const formData: Signup = {
      Name: this.signupForm.value.name,
      UserName: this.signupForm.value.username, 
      Password: this.signupForm.value.password,
      Security_Q: this.signupForm.value.security_q,
      Security_A: this.signupForm.value.security_a,
      House:  this.consumption()
    }
    this.formService.signup(formData).subscribe(
      res => {
        this.error = 'noError'
      }, error => this.error = error.error.Message
    )
  }

  //Método para calcular el consumo deL usuario
  consumption() {
    let consumption = this.signupForm.value.consumption
    let size = this.signupForm.value.size;

    switch (size) {

      case 'SMALL':

        switch (consumption) {
          case 'LOW':
            return 1;
          case 'MEDIUM':
            return 2;
          case 'HIGH':
            return 3;
          default:
            return 0;
        }

      case 'MEDIUM':

        switch (consumption) {
          case 'LOW':
            return 4;
          case 'MEDIUM':
            return 5;
          case 'HIGH':
            return 6;
          default:
            return 0;
        }

      case 'LARGE':

        switch (consumption) {
          case 'LOW':
            return 7;
          case 'MEDIUM':
            return 8;
          case 'HIGH':
            return 9;
          default:
            return 0;
        }

      default:
        return 0;
    }
  }
}
