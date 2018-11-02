import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpCardComponent } from './mp-card.component';

describe('MpCardComponent', () => {
  let component: MpCardComponent;
  let fixture: ComponentFixture<MpCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
