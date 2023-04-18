import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { Login } from '../interfaces/login.interfaces';
import { Reset } from '../interfaces/reset.interfaces';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  error: string = '';
  resetForm: FormGroup = new FormGroup({})
  resetPassword: boolean = false;

  constructor(private formService: FormService, private router:Router){}

  ngOnInit(): void {
      this.resetForm = this.createForm();
  }

  createForm(): FormGroup{
    return new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      security_q: new FormControl("", [Validators.required]),
      security_a: new FormControl("", [Validators.required]),
    })
  }

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
