import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpUsersComponent } from './mp-users.component';

describe('MpUsersComponent', () => {
  let component: MpUsersComponent;
  let fixture: ComponentFixture<MpUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
