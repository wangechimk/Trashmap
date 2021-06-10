import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private loginService:LoginService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });

  }
  loginUser(){
    this.loginService.loginUser(this.loginForm.value).subscribe(
      response =>{
        console.log(response)
        alert(this.loginForm.controls.username + 'logged in successfully') 
      },
      error => {
        console.log('error', error)
        alert('Username or password is incorrect')
      }             
    ) ;
  }

}
