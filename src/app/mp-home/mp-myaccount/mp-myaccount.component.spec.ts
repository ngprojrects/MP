import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpMyAccountComponent } from './mp-myaccount.component';

describe('MpMyAccountComponent', () => {
  let component: MpMyAccountComponent;
  let fixture: ComponentFixture<MpMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
