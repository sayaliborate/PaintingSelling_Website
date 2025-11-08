import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRetriveComponent } from './feedback-retrive.component';

describe('FeedbackRetriveComponent', () => {
  let component: FeedbackRetriveComponent;
  let fixture: ComponentFixture<FeedbackRetriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackRetriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackRetriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
