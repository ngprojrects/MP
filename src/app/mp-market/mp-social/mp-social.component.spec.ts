import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpSocialComponent } from './mp-social.component';

describe('MpSocialComponent', () => {
  let component: MpSocialComponent;
  let fixture: ComponentFixture<MpSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
