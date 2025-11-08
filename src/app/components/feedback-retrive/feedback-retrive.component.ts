import { Component, OnInit } from '@angular/core';
import { FeedbackRetriveService } from '../../service/feedback-retrive.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feedback-retrive',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './feedback-retrive.component.html',
  styleUrl: './feedback-retrive.component.css'
})
export class FeedbackRetriveComponent implements OnInit {
  feedbacks: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private feedbackService: FeedbackRetriveService) {}

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe(
      (data) => {
        this.feedbacks = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load feedbacks';
        this.isLoading = false;
      }
    );
  }
}