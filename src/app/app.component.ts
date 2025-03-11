import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
// import { HeroComponent } from "./components/hero/hero.component";
import { ContentComponent } from "./components/content/content.component";
import { ImageCarouselComponent } from "./components/image-carousel/image-carousel.component";
import { GuideCardsComponent } from "./components/guide-cards/guide-cards.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, ImageCarouselComponent, GuideCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Agadir Touristes';
}
