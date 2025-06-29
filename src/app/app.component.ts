import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { VendorChartComponent } from "./vendor-chart/vendor-chart.component";
import { VendorListComponent } from "./vendor-list/vendor-list.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { VendorColumnChartComponent } from "./vendor-chart/vendor-column-chart/vendor-column-chart.component";
import { VendorRadialChartComponent } from "./vendor-chart/vendor-radial-chart/vendor-radial-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VendorListComponent, SidebarComponent, VendorColumnChartComponent, VendorRadialChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VendorDashboard';
}
