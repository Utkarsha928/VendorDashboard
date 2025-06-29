import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorColumnChartComponent } from './vendor-column-chart.component';

describe('VendorColumnChartComponent', () => {
  let component: VendorColumnChartComponent;
  let fixture: ComponentFixture<VendorColumnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorColumnChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
