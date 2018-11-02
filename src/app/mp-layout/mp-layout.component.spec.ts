import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpLayoutComponent } from './mp-layout.component';

describe('MpLayoutComponent', () => {
  let component: MpLayoutComponent;
  let fixture: ComponentFixture<MpLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
