import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProfileService} from '../../services/profile.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  input:any

  constructor(private profileService:ProfileService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
  });
  }
  registerUser(){
    this.profileService.registerUser(this.registerForm.value).subscribe(
      
      response =>{
        console.log(response)
        alert('User' + this.input.username + 'has been created') 
      },
      error => console.log('error', error)
    ) ;
  }
  }
  


