import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllclassComponent } from './allclass.component';

describe('AllclassComponent', () => {
  let component: AllclassComponent;
  let fixture: ComponentFixture<AllclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
