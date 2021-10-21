import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesAirportComponent } from './manages-airport.component';

describe('ManagesAirportComponent', () => {
  let component: ManagesAirportComponent;
  let fixture: ComponentFixture<ManagesAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagesAirportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
