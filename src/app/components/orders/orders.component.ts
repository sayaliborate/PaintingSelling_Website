import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { Order } from '../../model/register';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent  implements OnInit {
  orders: any[] = [];
  message: string = '';
  error: string = '';

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: () => {
        this.error = 'Failed to load orders.';
      }
    });
  }

  updateStatus(order: any) {
    this.orderService.updateOrderStatus(order.id, order.status).subscribe({
      next: () => {
        this.message = 'Status updated successfully!';
        this.error = '';
      },
      error: () => {
        this.error = 'Failed to update status.';
        this.message = '';
      }
    });
  }
}