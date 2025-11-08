import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.product = params;
    });
  }

  processPayment() {
    alert('Payment Successful! 🎉');
    this.router.navigate(['/orders']); // Redirect to My Orders page after payment
  }
  buyNow(product: any) {
    this.router.navigate(['/checkout'], { queryParams: { 
      name: product.name, 
      price: product.price, 
      image: product.image 
    }});
  }
  
}