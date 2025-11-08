import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modern-art',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './modern-art.component.html',
  styleUrl: './modern-art.component.css'
})
export class ModernArtComponent {
  paintings = [
    {
      title: 'INDIAN FOLK DANCE 8',
      size: '36×24 inches',
      price: 32500,
      image: 'assets/images/ia1.jpg' // Replace with actual image path
    },
    {
      title: 'MODERN POT',
      size: '22×32 inches',
      price: 16800,
      image: 'assets/images/p1.jpg'
    },
    {
      title: 'KATTHAK',
      size: '20×30 inches',
      price: 17220,
      image: 'assets/images/ia3.jpg'
    },
    {
      title: 'POT',
      size: '36×24 inches',
      price: 32500,
      image: 'assets/images/o2.webp' // Replace with actual image path
    },

    // 2nd row

    {
      title: 'HANDMADE POT',
      size: '36×24 inches',
      price: 32500,
      image: 'assets/images/ia5.webp' // Replace with actual image path
    },
    {
      title: 'DESIGNER POT',
      size: '18×24 inches',
      price: 16800,
      image: 'assets/images/ia7.jpg'
    },
    {
      title: 'ARTISTIC POT',
      size: '20×30 inches',
      price: 17220,
      image: 'assets/images/ia8.jpg'
    },
    {
      title: 'MODERN POT',
      size: '22×32 inches',
      price: 16800,
      image: 'assets/images/p2.jpg'
    },

    //3rd row
    {
      title: 'SUNSET',
      size: '36×24 inches',
      price: 32500,
      image: 'assets/images/s1.jpg' // Replace with actual image path
    },
    {
      title: 'PORTRATE PAINTING',
      size: '18×24 inches',
      price: 16800,
      image: 'assets/images/s3.jpg'
    },
    {
      title: 'POT',
      size: '20×30 inches',
      price: 17220,
      image: 'assets/images/p1.jpg'
    },
    {
      title: 'WALL PAINTING',
      size: '22×32 inches',
      price: 16800,
      image: 'assets/images/o1.webp'
    }
  ];
}
