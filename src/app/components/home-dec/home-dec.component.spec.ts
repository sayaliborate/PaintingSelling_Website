import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecComponent } from './home-dec.component';

describe('HomeDecComponent', () => {
  let component: HomeDecComponent;
  let fixture: ComponentFixture<HomeDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
