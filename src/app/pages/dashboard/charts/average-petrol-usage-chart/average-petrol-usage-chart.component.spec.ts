import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePetrolUsageChartComponent } from './average-petrol-usage-chart.component';

describe('AveragePetrolUsageChartComponent', () => {
  let component: AveragePetrolUsageChartComponent;
  let fixture: ComponentFixture<AveragePetrolUsageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveragePetrolUsageChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AveragePetrolUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
