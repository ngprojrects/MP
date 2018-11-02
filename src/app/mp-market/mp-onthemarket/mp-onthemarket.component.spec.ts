import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpOnTheMarketComponent } from './mp-onthermarket.component';

describe('MpOnTheMarketComponent', () => {
  let component: MpOnTheMarketComponent;
  let fixture: ComponentFixture<MpOnTheMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpOnTheMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpOnTheMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
