import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfVehicleComponent } from './search-of-vehicle.component';

describe('SearchOfVehicleComponent', () => {
  let component: SearchOfVehicleComponent;
  let fixture: ComponentFixture<SearchOfVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOfVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOfVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
