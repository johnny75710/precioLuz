import { Component, OnInit } from '@angular/core';
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

  loginForm: FormGroup = new FormGroup({})

  constructor(private formService: FormService, private router:Router){}

  ngOnInit(): void {
      this.loginForm = this.createForm();
      if(localStorage.getItem('token')){
        this.router.navigate(['inicio'])
      }
  }

  createForm(): FormGroup{
    return new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  login(){
    const formData: Login = {
      UserName: this.loginForm.value.username,
      Password: this.loginForm.value.password
    }

    this.formService.login(formData).subscribe(res => {
      if(Object.keys(res.token).length > 0){
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.username)
        localStorage.setItem("house", res.house)
        this.router.navigate(['inicio'])
      }
    }, err => console.log(err))
  }
}
