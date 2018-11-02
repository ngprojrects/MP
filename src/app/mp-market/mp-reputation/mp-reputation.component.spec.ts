import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpReputationComponent } from './mp-reputation.component';

describe('MpReputationComponent', () => {
  let component: MpReputationComponent;
  let fixture: ComponentFixture<MpReputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpReputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpReputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
