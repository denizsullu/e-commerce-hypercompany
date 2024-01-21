import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from "@angular/forms"
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";

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
  constructor(private formBuilder:FormBuilder,private authService:AuthService) {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      username: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(data =>{
        console.log(data)
      })
    }
  }

}
