import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSessionComponent } from './first-session.component';

describe('FirstSessionComponent', () => {
  let component: FirstSessionComponent;
  let fixture: ComponentFixture<FirstSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstSessionComponent]
    });
    fixture = TestBed.createComponent(FirstSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
