import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSimpleComponent } from './popup-simple.component';

describe('PopupSimpleComponent', () => {
  let component: PopupSimpleComponent;
  let fixture: ComponentFixture<PopupSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
