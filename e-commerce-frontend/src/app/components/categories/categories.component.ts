import { Component } from '@angular/core';
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      id: 1,
      title: 'Su & İçecek',
      image:
        'https://market-product-images-cdn.getirapi.com/category/f9b26950-a462-49b2-9536-e8a383194182.png',
      alt: 'Su & İçecek',
    },
    {
      id: 2,
      title: 'Meyve & Sebze',
      image:
        'https://market-product-images-cdn.getirapi.com/category/13a7fc68-fc66-45fb-abf3-a9dfb299cfda.png',
      alt: 'Meyve & Sebze',
    },
    {
      id: 3,
      title: 'Fırından',
      image:
        'https://market-product-images-cdn.getirapi.com/category/d3b6744b-1ebd-409f-8073-4cf17b97a8c7.png',
      alt: 'Fırından',
    },
    {
      id: 4,
      title: 'Süt Ürünleri',
      image:
        'https://market-product-images-cdn.getirapi.com/category/12234b89-0519-41d1-baf3-b70728620247.png',
      alt: 'Süt Ürünleri',
    },
    {
      id: 5,
      title: 'Atıştırmalık',
      image:
        'https://market-product-images-cdn.getirapi.com/category/8443c38b-cc06-4997-a50d-92c4b3df9817.png',
      alt: 'Atıştırmalık',
    },
    {
      id: 6,
      title: 'Dondurma',
      image:
        'https://market-product-images-cdn.getirapi.com/category/5d0c050c-fbc5-46db-b4dc-5f840759746d.png',
      alt: 'Dondurma',
    },
    {
      id: 7,
      title: 'Temel Gıda',
      image:
        'https://market-product-images-cdn.getirapi.com/category/eb1f6a52-7efc-46d9-9712-33bfc3b37038.png',
      alt: 'Temel Gıda',
    },
    {
      id: 8,
      title: 'Kahvaltılık',
      image:
        'https://market-product-images-cdn.getirapi.com/category/0f60725b-6743-4add-a3d4-98be568a53f7.png',
      alt: 'Kahvaltılık',
    },
    {
      id: 9,
      title: 'Yiyecek',
      image:
        'https://market-product-images-cdn.getirapi.com/category/57f537f7-9973-4f94-87ef-47785c7d3f5b.png',
      alt: 'Yiyecek',
    },
    {
      id: 10,
      title: 'Fit & Form',
      image:
        'https://market-product-images-cdn.getirapi.com/category/318d0c01-3251-4ddb-b19e-c87c4c800fea.png',
      alt: 'Fit & Form',
    },
    {
      id: 11,
      title: 'Kişisel Bakım',
      image:
        'https://market-product-images-cdn.getirapi.com/category/eca31bbc-2a24-4c63-aa10-5671121f6589.png',
      alt: 'Kişisel Bakım',
    },
    {
      id: 12,
      title: 'Ev Bakım',
      image:
        'https://market-product-images-cdn.getirapi.com/category/7a5243a7-2474-4f76-b656-43be6ea78702.png',
      alt: 'Ev Bakım',
    },
    {
      id: 13,
      title: 'Ev & Yaşam',
      image:
        'https://market-product-images-cdn.getirapi.com/category/9f5cc306-280d-403a-8f8d-8d6fc0b0f5f8.png',
      alt: 'Ev & Yaşam',
    },
    {
      id: 14,
      title: 'Teknoloji',
      image:
        'https://market-product-images-cdn.getirapi.com/category/359c015a-8e2e-448e-9c1a-75fe4cd0445a.png',
      alt: 'Teknoloji',
    },
    {
      id: 15,
      title: 'Evcil Hayvan',
      image:
        'https://market-product-images-cdn.getirapi.com/category/79427f37-be1c-44dc-beaf-ed1e5e9a8562.png',
      alt: 'Evcil Hayvan',
    },
    {
      id: 16,
      title: 'Bebek',
      image:
        'https://market-product-images-cdn.getirapi.com/category/c1c26b96-eb94-4fac-af51-777e26085826.png',
      alt: 'Bebek',
    },
    {
      id: 17,
      title: 'Cinsel Sağlık',
      image:
        'https://market-product-images-cdn.getirapi.com/category/b429f164-16ca-40a7-acb1-0fce8b4d8838.png',
      alt: 'Cinsel Sağlık',
    },
  ];
}

