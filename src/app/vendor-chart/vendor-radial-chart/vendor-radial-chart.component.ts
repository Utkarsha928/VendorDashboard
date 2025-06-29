import { Component } from '@angular/core';
import { NgApexchartsModule,ApexChart,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexDataLabels,
  ApexFill } from 'ng-apexcharts';

@Component({
  selector: 'app-vendor-radial-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './vendor-radial-chart.component.html',
  styleUrl: './vendor-radial-chart.component.scss'
})
export class VendorRadialChartComponent {
 public series: ApexNonAxisChartSeries = [80]; // 80% fill

  public chart: ApexChart = {
    type: 'radialBar',
    height: 250,
    offsetY: -20,
    sparkline: { enabled: true }
  };

  public stroke = {
    lineCap: "round" as "round"
  };

  public plotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#e0e0e0',
        strokeWidth: '60%',
        margin: 5
      },
      hollow: {
        margin: 0,
        size: '70%',
        background: 'transparent'
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: true,
          fontSize: '32px',
          fontWeight: 600,
          color: '#000',
          offsetY: 10,
          formatter: () => '240' // Static value for demonstration
        }
      }
    }
  };

  public fill: ApexFill = {
    type: 'solid'
  };

  public colors: string[] = ['#8e44ad'];


}
