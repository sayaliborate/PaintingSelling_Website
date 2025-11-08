import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredItems = [
    { image: 'assets/painting1.jpg', title: 'Sunset Painting' },
    { image: 'assets/pot1.jpg', title: 'Handcrafted Vase' }
  ];
  
  categories = [
    { image: 'assets/paintings-category.jpg', name: 'Paintings' },
    { image: 'assets/pots-category.jpg', name: 'Pots' }
  ];

  testimonials = [
    { text: 'Amazing quality and fast delivery! Highly recommend.', author: 'Sarah K.' },
    { text: 'The best art marketplace I have ever used. Love it!', author: 'John D.' },
    { text: 'Great customer service and beautiful pieces.', author: 'Emily R.' }
  ];

  latestOffers = [
    { image: 'assets/offer1.jpg', title: 'Exclusive Artwork', discount: 20 },
    { image: 'assets/offer2.jpg', title: 'Pottery Sale', discount: 15 }
  ];


}
