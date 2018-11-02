import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpMessagesComponent } from './mp-messages.component';

describe('MpMessagesComponent', () => {
  let component: MpMessagesComponent;
  let fixture: ComponentFixture<MpMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
