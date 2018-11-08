import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpPartnersFormComponent } from './mp-partners-form.component';

describe('MpPartnersFormComponent', () => {
  let component: MpPartnersFormComponent;
  let fixture: ComponentFixture<MpPartnersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpPartnersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpPartnersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
