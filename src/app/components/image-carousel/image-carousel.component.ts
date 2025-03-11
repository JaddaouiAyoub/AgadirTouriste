import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-image-carousel',
  imports: [CarouselModule,CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {

  images = [
    'images/agadir.jpg',
    'images/agadir1.jpg',
    'images/agadir2.jpg',
    'images/agadir3.webp',
  ];
  noPause = false; // Permet d'activer/désactiver la pause

  pauseCarousel() {
    this.noPause = true;
  }

  resumeCarousel() {
    this.noPause = false;
  }
}
