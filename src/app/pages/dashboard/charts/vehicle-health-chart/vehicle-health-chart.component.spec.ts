import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHealthChartComponent } from './vehicle-health-chart.component';

describe('VehicleHealthChartComponent', () => {
  let component: VehicleHealthChartComponent;
  let fixture: ComponentFixture<VehicleHealthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleHealthChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleHealthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
