import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpSettlementComponent } from './mp-settlement.component';

describe('MpSettlementComponent', () => {
  let component: MpSettlementComponent;
  let fixture: ComponentFixture<MpSettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpSettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
