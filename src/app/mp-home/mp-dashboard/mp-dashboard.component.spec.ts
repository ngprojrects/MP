import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpDashboardComponent } from './mp-dashboard.component';

describe('MpDashboardComponent', () => {
  let component: MpDashboardComponent;
  let fixture: ComponentFixture<MpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
