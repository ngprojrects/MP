import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpPartnersBlockComponent } from './mp-partners-block.component';

describe('MpPartnersBlockComponent', () => {
  let component: MpPartnersBlockComponent;
  let fixture: ComponentFixture<MpPartnersBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpPartnersBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpPartnersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
