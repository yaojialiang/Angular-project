import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCarComponent } from './spinner-car.component';

describe('SpinnerCarComponent', () => {
  let component: SpinnerCarComponent;
  let fixture: ComponentFixture<SpinnerCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
