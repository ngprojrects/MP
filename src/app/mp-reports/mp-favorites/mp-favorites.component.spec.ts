import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpFavoritesComponent } from './mp-favorites.component';

describe('MpFavoritesComponent', () => {
  let component: MpFavoritesComponent;
  let fixture: ComponentFixture<MpFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
