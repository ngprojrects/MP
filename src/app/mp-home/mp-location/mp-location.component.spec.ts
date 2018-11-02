import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpLocationComponent } from './mp-location.component';

describe('MpLocationComponent', () => {
  let component: MpLocationComponent;
  let fixture: ComponentFixture<MpLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
