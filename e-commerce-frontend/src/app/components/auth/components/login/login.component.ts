import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../../services/auth/auth.service";
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
      username: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.minLength(6)]]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = this.loginForm.getRawValue();

      this.authService.login(loginModel).subscribe({
        next: (userData) => {
          this.toastrService.info('Başarıyla giriş yapıldı.');
          if (userData.authorities[0] === 'ROLE_ADMIN') {
            this.router.navigate(['/admin']);
          }
          else {
              this.router.navigate(['/products']);
          }

        },
        error: (error) => {
          this.toastrService.error('Giriş başarısız', 'Kullanıcı adı veya parola hatalı');
          console.error(error);
        }
      });
    }

}

}
