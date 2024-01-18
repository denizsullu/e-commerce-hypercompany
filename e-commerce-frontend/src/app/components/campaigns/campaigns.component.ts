import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";


@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    SlickCarouselModule
  ],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent{


  campaigns= [
    {
      "id": 1,
      "image": "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"
    },
    {
      "id": 2,
      "image": "https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg"
    },
    {
      "id": 3,
      "image": "https://cdn.getir.com/misc/5fb524d4c725f1530045cefc_banner_tr_1609343376255.jpeg"
    },
    {
      "id": 4,
      "image": "https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg"
    }
  ]

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    arrows: true,
    pauseOnHover: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet ve daha büyük cihazlar için
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600, // 600px'e kadar olan küçük ekranlar ve tabletler için
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480, // 480px'e kadar olan mobil cihazlar için
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
  ]
    }


};
