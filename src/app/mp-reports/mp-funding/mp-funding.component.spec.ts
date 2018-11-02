import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpFundingComponent } from './mp-funding.component';

describe('MpFundingComponent', () => {
  let component: MpFundingComponent;
  let fixture: ComponentFixture<MpFundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpFundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
