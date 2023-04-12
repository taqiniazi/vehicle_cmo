import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ApexStroke,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  fill: ApexFill;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-running-vehicles-chart',
  templateUrl: './running-vehicles-chart.component.html',
  styleUrls: ['./running-vehicles-chart.component.scss']
})
export class RunningVehiclesChartComponent {
  @ViewChild("running_vehicle_chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44,45,65,78],
      
      chart: {
        height: 320,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                return "249";
              }
            }
          }
        },
        
      },    
      labels: ["Apples", "Oranges", "Bananas", "Berries"]
    };
  }
}
