import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpListingsComponent } from './mp-listings.component';

describe('MpListingsComponent', () => {
  let component: MpListingsComponent;
  let fixture: ComponentFixture<MpListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
