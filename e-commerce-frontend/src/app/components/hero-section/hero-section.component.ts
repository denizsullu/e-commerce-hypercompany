import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    SlickCarouselModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {

  slides = [
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg',
    },
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg',
    },
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg',
    },
    {
      img: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg',
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
