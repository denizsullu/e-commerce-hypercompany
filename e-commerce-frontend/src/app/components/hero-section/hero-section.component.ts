import {Component} from '@angular/core';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from "../../services/auth.service";
import {AsyncPipe} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    SlickCarouselModule,
    MatInputModule,
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink

  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder, public authService: AuthService, private toastrService: ToastrService, private router: Router) {
     this.createLoginForm();
  }

  slides = [
    {
      img: 'assets/navbar/header-icons/getir-mainpage-1.webp',
    },
    {
      img: 'assets/navbar/header-icons/getir-mainpage-2.webp',
    },
    {
      img: 'assets/navbar/header-icons/getir-mainpage-3.webp',
    },
    {
      img: 'assets/navbar/header-icons/getir-mainpage-4.webp',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    arrows: false,
    pauseOnHover: true,
    dots: false,
  };


  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required,Validators.email]],
      password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value)
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
