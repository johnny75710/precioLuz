import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { Reset } from '../interfaces/reset.interfaces';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent {

  //Variables
  error: string = '';
  resetForm: FormGroup = new FormGroup({})
  resetPassword: boolean = false;

  //Constructor
  constructor(private formService: FormService){}

  //Al iniciar el componente se crea el formulario
  ngOnInit(): void {
      this.resetForm = this.createForm();
  }

  //Método para crear el formulario
  createForm(): FormGroup{
    return new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      security_q: new FormControl("", [Validators.required]),
      security_a: new FormControl("", [Validators.required]),
    })
  }

  //Método para enviar el formulario de reseteo de contraseña
  reset(){
    const formData: Reset = {
      UserName: this.resetForm.value.username,
      Password: this.resetForm.value.password, 
      Security_Q: this.resetForm.value.security_q, 
      Security_A: this.resetForm.value.security_a
    }

    this.formService.reset(formData).subscribe(res => {
      this.error = 'noError'
    }, error => this.error = error.error.Message)
  }

}
