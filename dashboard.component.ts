import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  earnings = 12000;
  totalSales = 35;
  totalArtworks = 15;

  recentOrders = [
    { id: 'ORD123', customer: 'Aarav Mehta', artwork: 'Sunset Painting', status: 'Shipped' },
    { id: 'ORD124', customer: 'Pooja Sharma', artwork: 'Blue Pot', status: 'Processing' },
    { id: 'ORD125', customer: 'Rohan Gupta', artwork: 'Abstract Art', status: 'Delivered' }
  ];
}
