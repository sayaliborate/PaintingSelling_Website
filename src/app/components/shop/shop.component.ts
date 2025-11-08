import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShopService } from '../../service/shop.service';
import { ToastrService } from 'ngx-toastr';
import { ArtistLoginService } from '../../service/artist-login.service';
import { OrderService } from '../../service/order.service';
import { FormsModule } from '@angular/forms';
export interface Painting {
  id: number;
  title: string;
  price: number;
  image: string; // URL of the image
}
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
paintings: Painting[] = [];
  errorMessage = '';

  showOrderFormIndex: number | null = null;

  orderData: {
    fullName: string;
    address: string;
    phone: string;
    paymentMethod: 'COD' | 'Online';
    quantity: number;
  } = {
    fullName: '',
    address: '',
    phone: '',
    paymentMethod: 'COD',
    quantity: 1,
  };

  message = '';
  error = '';

  constructor(
    private paintingService: ArtistLoginService,
    private orderService: ShopService
  ) {}

  ngOnInit() {
    this.paintingService.getPaintings().subscribe({
      next: (data) => (this.paintings = data),
      error: () => (this.errorMessage = 'Failed to load paintings.'),
    });
  }

  toggleOrderForm(index: number) {
    if (this.showOrderFormIndex === index) {
      this.showOrderFormIndex = null;
      this.clearForm();
    } else {
      this.showOrderFormIndex = index;
      this.clearForm();
    }
  }

  clearForm() {
    this.orderData = {
      fullName: '',
      address: '',
      phone: '',
      paymentMethod: 'COD',
      quantity: 1,
    };
    this.message = '';
    this.error = '';
  }

  placeOrder(paintingId: number) {
    if (!this.orderData.fullName || !this.orderData.address || !this.orderData.phone || !this.orderData.paymentMethod) {
      this.error = 'Please fill all required fields.';
      return;
    }

    const orderPayload = {
      painting: paintingId,
      quantity: this.orderData.quantity,
      full_name: this.orderData.fullName,
      address: this.orderData.address,
      phone: this.orderData.phone,
      payment_method: this.orderData.paymentMethod,
    };

    const csrfToken = this.getCSRFToken();

    this.orderService.placeOrder(orderPayload, csrfToken).subscribe({
      next: (res) => {
        this.message = 'Order placed successfully!';
        this.error = '';
        this.clearForm();
        this.showOrderFormIndex = null;
      },
      error: (err) => {
        this.error = 'Failed to place order. Please try again.';
        this.message = '';
      },
    });
  }

  private getCSRFToken(): string | null {
    const name = 'csrftoken=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length);
      }
    }
    return null;
  }
}