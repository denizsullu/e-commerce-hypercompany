import {Component} from '@angular/core';
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {
    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 3
            }
        },
        nav: true,
        navText: [
            '<span class="material-icons">arrow_back_ios</span>',
            '<span class="material-icons">arrow_forward_ios</span>'
        ]
    };


  campaigns = [
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  }


};
