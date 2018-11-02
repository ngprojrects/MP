import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpSidebarComponent } from './mp-sidebar.component';

describe('MpSidebarComponent', () => {
  let component: MpSidebarComponent;
  let fixture: ComponentFixture<MpSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
