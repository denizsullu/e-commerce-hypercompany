import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {AsyncPipe} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    MatInputModule,
    AsyncPipe,
    ReactiveFormsModule,
    RouterLink,
    CarouselModule

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
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
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
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe({
        next: (userData) => {
          this.toastrService.info('Başarıyla giriş yapıldı.');
          this.router.navigate(['/products']);
        },
        error: (error) => {
          this.toastrService.error('Giriş başarısız', 'Kullanıcı adı veya parola hatalı');
          console.error(error);
        }
      });
    }


  }
}
