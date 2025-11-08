import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonEngine } from '@angular/ssr';
import { ArtistLoginService } from '../../service/artist-login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './artist-login.component.html',
  styleUrl: './artist-login.component.css'
})
export class ArtistLoginComponent {
  title: string = '';
  price: number | null = null;
  selectedFile: File | null = null;
  uploadSuccessMessage: string = '';
  uploadErrorMessage: string = '';
  previewImage: string | ArrayBuffer | null = null;

  constructor(private paintingService: ArtistLoginService) {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];

      // Preview selected image
      const reader = new FileReader();
      reader.onload = () => this.previewImage = reader.result;
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (!this.title || this.price === null || !this.selectedFile) {
      this.uploadErrorMessage = 'Please fill all fields and select an image.';
      this.uploadSuccessMessage = '';
      return;
    }

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('price', this.price.toString());
    formData.append('image', this.selectedFile);

    this.paintingService.uploadPainting(formData).subscribe({
      next: () => {
        this.uploadSuccessMessage = 'Painting uploaded successfully!';
        this.uploadErrorMessage = '';
        this.clearForm();
      },
      error: (err) => {
        this.uploadErrorMessage = 'Failed to upload painting.';
        this.uploadSuccessMessage = '';
        console.error(err);
      }
    });
  }

  clearForm(): void {
    this.title = '';
    this.price = null;
    this.selectedFile = null;
    this.previewImage = null;
  }
}