import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto';
import {ProductService} from '../../../../services/store/product.service';

@Component({
  selector: 'app-store-sales-component',
  templateUrl: './store-sales.component.html',
  styleUrls: ['./store-sales.component.scss'],
})
export class StoreSalesComponent implements OnInit{
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  labels: Map<string, number>;
  holder = {};
  constructor(private product: ProductService) { }

  ngOnInit(){
    this.showChart();
  }

  addSales() {
  }

  showChart() {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const ctx = (<any>document.getElementById('sales-chart')).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.product.label,
        datasets: [{
          label: 'Sales Chart',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: this.product.data,
          borderWidth: 1
        }]
      }
    });
  }

  back() {
    this.childEvent.emit();
  }
}
