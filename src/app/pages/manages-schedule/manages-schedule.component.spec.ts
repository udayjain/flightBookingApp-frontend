import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesScheduleComponent } from './manages-schedule.component';

describe('ManagesScheduleComponent', () => {
  let component: ManagesScheduleComponent;
  let fixture: ComponentFixture<ManagesScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagesScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
