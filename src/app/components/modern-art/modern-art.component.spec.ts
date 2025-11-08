import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernArtComponent } from './modern-art.component';

describe('ModernArtComponent', () => {
  let component: ModernArtComponent;
  let fixture: ComponentFixture<ModernArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
