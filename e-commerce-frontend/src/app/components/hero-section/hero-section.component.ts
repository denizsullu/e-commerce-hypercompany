import {Component} from '@angular/core';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    SlickCarouselModule,
    MatInputModule,

  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {

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


}
