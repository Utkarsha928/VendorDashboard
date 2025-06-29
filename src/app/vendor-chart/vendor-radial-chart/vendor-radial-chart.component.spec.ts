import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRadialChartComponent } from './vendor-radial-chart.component';

describe('VendorRadialChartComponent', () => {
  let component: VendorRadialChartComponent;
  let fixture: ComponentFixture<VendorRadialChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorRadialChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRadialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
