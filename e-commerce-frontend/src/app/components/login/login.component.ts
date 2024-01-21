import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from "@angular/forms"
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIcon,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
  }

}
