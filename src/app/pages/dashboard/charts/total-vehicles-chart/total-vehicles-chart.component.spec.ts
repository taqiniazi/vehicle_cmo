import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVehiclesChartComponent } from './total-vehicles-chart.component';

describe('TotalVehiclesChartComponent', () => {
  let component: TotalVehiclesChartComponent;
  let fixture: ComponentFixture<TotalVehiclesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVehiclesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalVehiclesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
