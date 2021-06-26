import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sonampa';
  chartData;
  sendChartData(event: object): void {
    this.chartData = event;
  }
}
