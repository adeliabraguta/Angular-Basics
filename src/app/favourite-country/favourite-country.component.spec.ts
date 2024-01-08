import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCountryComponent } from './favourite-country.component';

describe('FavouriteCountryComponent', () => {
  let component: FavouriteCountryComponent;
  let fixture: ComponentFixture<FavouriteCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteCountryComponent]
    });
    fixture = TestBed.createComponent(FavouriteCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
