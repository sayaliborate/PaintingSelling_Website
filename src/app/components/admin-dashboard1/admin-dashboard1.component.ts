import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-admin-dashboard1',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './admin-dashboard1.component.html',
  styleUrl: './admin-dashboard1.component.css'
})
export class AdminDashboard1Component  implements OnInit {
  orders: any[] = [];
  users: any[] = [];
  products: any[] = [];
  
  totalOrders: number = 0;
  totalUsers: number = 0;
  totalSales: number = 0;
  pendingOrders: number = 0;

  constructor(private cdRef: ChangeDetectorRef, private router: Router, private orderService: OrderService) {}

  ngOnInit() {
    this.loadOrders();
    this.loadUsers();
    this.loadProducts();
    this.generateReports();
  }

  loadOrders() {
    this.orders = JSON.parse(localStorage.getItem('myOrders') || '[]');
  }

  loadUsers() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  loadProducts() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  generateReports() {
    this.totalOrders = this.orders.length;
    this.totalUsers = this.users.length;

    // Calculate Total Sales
    this.totalSales = this.orders.reduce((total, order) => total + Number(order.price || 0), 0);

    // Count Pending Orders
    this.pendingOrders = this.orders.filter(order => order.status === 'Pending').length;
  }
}