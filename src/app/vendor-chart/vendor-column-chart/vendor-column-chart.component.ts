import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexGrid,
  ApexTooltip,
  NgApexchartsModule
} from 'ng-apexcharts'

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   plotOptions: ApexPlotOptions;
//   dataLabels: ApexDataLabels;
//   legend: ApexLegend;
//   fill: ApexFill;
//   grid: ApexGrid;
//   tooltip: ApexTooltip;
//   colors: string[];
// };

@Component({
  selector: 'app-vendor-column-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './vendor-column-chart.component.html',
  styleUrl: './vendor-column-chart.component.scss'
})
export class VendorColumnChartComponent {
  public series: ApexAxisChartSeries = [
    {
      //name: 'Low',
      data: [20, 30, 15, 25, 18, 30, 22, 26, 24, 28, 30, 20]
    },
    {
      //name: 'Medium',
      data: [20, 25, 20, 30, 15, 25, 18, 20, 22, 26, 30, 18]
    },
    {
      //name: 'High',
      data: [30, 35, 25, 35, 20, 40, 30, 28, 26, 32, 34, 25]
    }
  ];
  public legend: ApexLegend = {
    show:false
  }
  public chart: ApexChart = {
    type: 'bar',
    height: 200,
    stacked: true,
    toolbar: { show: false },
    zoom: { enabled: false }
  };

  public plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      borderRadius: 4
    }
  };

  public xaxis: ApexXAxis = {
    title: {
      text: 'Month',
      style: {
        color: '#6B7280',
        fontSize: '12px'
      }
    },
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px'
      }
    }
  };

  public yaxis: ApexYAxis = {
    min:0,
    max:100,
    tickAmount: 5,
    title: {
      text: 'Security rating',
      style: {
        color: '#6B7280',
        fontSize: '12px'
      }
    },
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px'
      }
    }
  };

  public dataLabels: ApexDataLabels = {
    enabled: false
  };

  public fill: ApexFill = {
    opacity: 1
  };

  public grid: ApexGrid = {
    borderColor: '#e0e0e0',
    strokeDashArray: 4
  };

  public tooltip: ApexTooltip = {
    shared: true,
    intersect: false
  };

  public colors: string[] = ['#6B21A8', '#8B5CF6', '#E5E7EB'];

}
