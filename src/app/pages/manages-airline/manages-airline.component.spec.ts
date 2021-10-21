import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesAirlineComponent } from './manages-airline.component';

describe('ManagesAirlineComponent', () => {
  let component: ManagesAirlineComponent;
  let fixture: ComponentFixture<ManagesAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagesAirlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
