import { Component } from '@angular/core';
import { FrrdbackService } from '../../service/frrdback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  feedback = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  constructor(private feedbackService: FrrdbackService) { }

  onSubmit() {
    this.feedbackService.submitFeedback(this.feedback).subscribe(
      response => {
        console.log('Feedback submitted:', response);
        this.submitted = true;

        // Reset form
        this.feedback = { name: '', email: '', message: '' };

        // Optional: Alert
        alert('Feedback submitted successfully!');
      },
      error => {
        console.error('Error submitting feedback:', error);
        alert('Failed to submit feedback!');
      }
    );
  }
}