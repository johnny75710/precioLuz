import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user.interfaces'
import { FormService } from '../form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({})
  house: number = 0;

  constructor(private formService: FormService){}

  ngOnInit(): void {
    this.signupForm = this.createForm()
  }

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

  signup() {
    const formData: User = {
      Name: this.signupForm.value.name,
      UserName: this.signupForm.value.username, 
      Password: this.signupForm.value.password,
      Security_Q: this.signupForm.value.security_q,
      Security_A: this.signupForm.value.security_a,
      House:  this.consumption()
    }
    console.log(formData)

    this.formService.signup(formData).subscribe(
      res => console.log(res), error => console.error(error)
    )
  }


  consumption() {
    let consumption = this.signupForm.value.consumption
    let size = this.signupForm.value.size;

    switch (size) {

      case 'SMALL':

        switch (consumption) {
          case 'LOW':
            return 5;
          case 'MEDIUM':
            return 6;
          case 'HIGH':
            return 7;
          default:
            return 0;
        }

      case 'MEDIUM':

        switch (consumption) {
          case 'LOW':
            return 9;
          case 'MEDIUM':
            return 11;
          case 'HIGH':
            return 13;
          default:
            return 0;
        }

      case 'LARGE':

        switch (consumption) {
          case 'LOW':
            return 15;
          case 'MEDIUM':
            return 19;
          case 'HIGH':
            return 22;
          default:
            return 0;
        }

      default:
        return 0;
    }
  }
}
