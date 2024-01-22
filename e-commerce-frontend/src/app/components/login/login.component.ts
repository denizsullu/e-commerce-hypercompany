import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from "@angular/forms"
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";

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
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService, private router:Router) {
    this.createLoginForm();
  }

  ngOnInit(): void {
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
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe({
        next: (response) => {
          this.toastrService.info(response.message);
          localStorage.setItem("token", response.token);
          console.log(response.token)
          this.router.navigate(["/products"])
        },
        error: (error) => {
          this.toastrService.error('Giriş başarısız', 'Kullanıcı adı veya parola hatalı');
          console.error(error);
        },
        complete: () => {

        }
      });

    }
  }

}
