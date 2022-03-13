import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippngComponent } from './shippng.component';

describe('ShippngComponent', () => {
  let component: ShippngComponent;
  let fixture: ComponentFixture<ShippngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
