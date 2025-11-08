import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { Order } from '../../model/register';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 totalPaintings = 0;
  totalOrders = 0;
  pendingOrders = 0;
  deliveredOrders = 0;
  recentOrders: Order[] = [];

  constructor(private dashboardService: DashboardService) {}

 ngOnInit(): void {
  this.dashboardService.getOrders().subscribe({
    next: (orders) => {
      console.log('Orders from API:', orders);
      this.totalOrders = orders.length;
      this.pendingOrders = orders.filter(o => o.status === 'pending').length;
      this.deliveredOrders = orders.filter(o => o.status === 'arrived').length;
      this.recentOrders = orders.sort((a, b) => new Date(b.order_date).getTime() - new Date(a.order_date).getTime()).slice(0, 5);
    },
    error: (err) => console.error(err),
  });
}

}
