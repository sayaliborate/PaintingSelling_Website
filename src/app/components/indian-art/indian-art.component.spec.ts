import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianArtComponent } from './indian-art.component';

describe('IndianArtComponent', () => {
  let component: IndianArtComponent;
  let fixture: ComponentFixture<IndianArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndianArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
