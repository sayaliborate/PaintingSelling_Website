import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistLoginComponent } from './artist-login.component';

describe('ArtistLoginComponent', () => {
  let component: ArtistLoginComponent;
  let fixture: ComponentFixture<ArtistLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
