import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewCardComponent } from './doctor-view-card.component';

describe('DoctorViewCardComponent', () => {
  let component: DoctorViewCardComponent;
  let fixture: ComponentFixture<DoctorViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
