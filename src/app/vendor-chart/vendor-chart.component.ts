import { Component } from '@angular/core';
import { VendorColumnChartComponent } from "./vendor-column-chart/vendor-column-chart.component";
import { VendorRadialChartComponent } from "./vendor-radial-chart/vendor-radial-chart.component";


@Component({
  selector: 'app-vendor-chart',
  standalone: true,
  imports: [VendorColumnChartComponent, VendorRadialChartComponent],
  templateUrl: './vendor-chart.component.html',
  styleUrl: './vendor-chart.component.scss'
})
export class VendorChartComponent {
 
}
