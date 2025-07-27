import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    address: "123 Art Street, New Delhi, India",
    phone: "+91 98765 43210",
    email: "info@arthaven.com",
    socialLinks: [
      { name: "Facebook", url: "https://facebook.com", icon: "assets/icons/facebook.png" },
      { name: "Instagram", url: "https://instagram.com", icon: "assets/icons/instagram.png" },
      { name: "Twitter", url: "https://twitter.com", icon: "assets/icons/twitter.png" }
    ]
  };

  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345096675!2d-122.41941568468186!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4a8244d%3A0xa11e287b7dc6b1e5!2sArt%20Gallery!5e0!3m2!1sen!2sin!4v1642598412345!5m2!1sen!2sin";
}