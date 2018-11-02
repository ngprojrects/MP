import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpWebsiteComponent } from './mp-website.component';

describe('MpWebsiteComponent', () => {
  let component: MpWebsiteComponent;
  let fixture: ComponentFixture<MpWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
