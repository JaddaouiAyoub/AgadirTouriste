import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guide-cards',
  imports: [CommonModule],
  templateUrl: './guide-cards.component.html',
  styleUrl: './guide-cards.component.css'
})
export class GuideCardsComponent {
  items = [
    { title: 'Informations', icon: 'fas fa-info-circle' },
    { title: 'Que voir', icon: 'fas fa-heart' },
    { title: 'Comment s\'y rendre', icon: 'fas fa-map-signs' },
    { title: 'Transports', icon: 'fas fa-train' },
    { title: 'Comment économiser', icon: 'fas fa-wallet' },
    { title: 'Où manger', icon: 'fas fa-utensils', type: 'restaurants' as 'restaurants' },
    { title: 'Shopping', icon: 'fas fa-shopping-bag' },
    { title: 'Où dormir', icon: 'fas fa-bed', type: 'hotels' as 'hotels' },
    { title: 'Agadir en deux jours', icon: 'fas fa-landmark' },
    { title: 'Plan', icon: 'fas fa-map' }
  ];

  hotels = [
    { name: "Atlantic Hotel Agadir", rating: 4.5, image: "images/hotel1.jpg" , link:"https://www.atlantichotelagadir.com" },
    { name: "Dinosaur Anza Surf House", rating: 4.0, image: "images/hotel2.jpg" , link:"https://www.atlantichotelagadir.com"},
    { name: "Odyssee Park Hotel", rating: 4.8, image: "images/hotel3.jpg" , link:"https://www.intouriste.com" }
  ];

  restaurants = [
    { name: "Blacksmith agadir restaurant", rating: 4.8, image: "images/restaurant1.jpg" },
    { name: "Amsterdam luxury restaurant", rating: 4.7, image: "images/restaurant2.jpg" },
    { name: "Ô Playa", rating: 4.3, image: "images/restaurant3.jpg" }
  ];

  selectedCategory: 'hotels' | 'restaurants' | null = null;

  showCategory(type: 'hotels' | 'restaurants') {
    this.selectedCategory = this.selectedCategory === type ? null : type;
  }

 // Méthode pour obtenir la partie entière de la note
 getFullStars(rating: number): number {
  return Math.floor(rating);
}

// Méthode pour vérifier si la note a une partie décimale (par exemple, 4.5, 3.2, etc.)
hasHalfStar(rating: number): boolean {
  return rating % 1 >= 0.5;  // Cela vérifie si la partie décimale est égale ou supérieure à 0.5
}

}
