import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpArchiveComponent } from './mp-archive.component';

describe('MpArchiveComponent', () => {
  let component: MpArchiveComponent;
  let fixture: ComponentFixture<MpArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
