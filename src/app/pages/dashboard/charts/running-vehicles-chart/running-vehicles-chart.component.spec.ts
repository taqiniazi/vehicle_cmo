import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningVehiclesChartComponent } from './running-vehicles-chart.component';

describe('RunningVehiclesChartComponent', () => {
  let component: RunningVehiclesChartComponent;
  let fixture: ComponentFixture<RunningVehiclesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningVehiclesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningVehiclesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
