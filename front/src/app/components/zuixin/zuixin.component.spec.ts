import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuixinComponent } from './zuixin.component';

describe('ZuixinComponent', () => {
  let component: ZuixinComponent;
  let fixture: ComponentFixture<ZuixinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZuixinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuixinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
