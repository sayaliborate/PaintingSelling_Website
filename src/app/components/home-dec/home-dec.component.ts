import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-dec',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-dec.component.html',
  styleUrl: './home-dec.component.css'
})
export class HomeDecComponent {
  paintings = [
    {
      title: 'SUNRISE PAINTING',
      size: '36×24 inches',
      price: 32500,
      image: 'assets/images/s5.jpg' // Replace with actual image path
    },
    {
      title: 'WALL PAOMTING',
      size: '18×24 inches',
      price: 16800,
      image: 'assets/images/s4.webp'
    },
    {
      title: 'HALL PAINTING',
      size: '20×30 inches',
      price: 17220,
      image: 'assets/images/s2.avif'
    },
    {
      title: 'SUNSET',
      size: '22×32 inches',
      price: 16800,
      image: 'assets/images/s1.jpg'
    },

    // 2nd row

    {
      title: 'HANDMADE POT',
      size: '36×24 inches',
      price: 32500,
      image: 'assets/images/p4.webp' // Replace with actual image path
    },
    {
      title: 'DESIGNER POT',
      size: '18×24 inches',
      price: 16800,
      image: 'assets/images/p3.webp'
    },
    {
      title: 'ARTISTIC POT',
      size: '20×30 inches',
      price: 17220,
      image: 'assets/images/p2.jpg'
    },
    {
      title: 'MODERN POT',
      size: '22×32 inches',
      price: 16800,
      image: 'assets/images/p1.jpg'
    },

    //3rd row
    {
      title: 'POT',
      size: '36×24 inches',
      price: 32500,
      image: 'assets/images/o2.webp' // Replace with actual image path
    },
    {
      title: 'PORTRATE PAINTING',
      size: '18×24 inches',
      price: 16800,
      image: 'assets/images/o1.webp'
    },
    {
      title: 'PAINTING',
      size: '20×30 inches',
      price: 17220,
      image: 'assets/images/a1.jpeg'
    },
    {
      title: 'WALL PAINTING',
      size: '22×32 inches',
      price: 16800,
      image: 'assets/images/a2.jpg'
    }
  ];
}
