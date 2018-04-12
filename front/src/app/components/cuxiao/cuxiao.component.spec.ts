import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuxiaoComponent } from './cuxiao.component';

describe('CuxiaoComponent', () => {
  let component: CuxiaoComponent;
  let fixture: ComponentFixture<CuxiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuxiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuxiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
