import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsButtonComponent } from './hms-button.component';

describe('HmsButtonComponent', () => {
  let component: HmsButtonComponent;
  let fixture: ComponentFixture<HmsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
