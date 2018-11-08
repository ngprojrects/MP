import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpPartnersDashboardComponent } from './mp-partners-dashboard.component';

describe('MpPartnersDashboardComponent', () => {
  let component: MpPartnersDashboardComponent;
  let fixture: ComponentFixture<MpPartnersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpPartnersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpPartnersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
