import {Component, Input, OnInit} from '@angular/core';
import {DataServiceService} from '../../service/data-service/data-service.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {distinctUntilChanged} from 'rxjs/operators';
@UntilDestroy()
@Component({
  selector: 'app-generate-chart',
  templateUrl: './generate-chart.component.html',
  styleUrls: ['./generate-chart.component.css']
})
export class GenerateChartComponent implements OnInit {
  constructor( private dataServiceService: DataServiceService) { }
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabels = [];
  public chartType = 'bar';
  public chartLegend = true;
  public chartData = [

  ];
  ngOnInit(): void {
    this.dataServiceService.getChartDataInfo().pipe(untilDestroyed(this), distinctUntilChanged()).subscribe((res) => {
      if (res) {
        this.chartData.length = 0;
        this.chartLabels.length = 0;
        this.chartData.push({data: [...res.dataset.data], label: res.dataset.label, backgroundColor: [
            '#f38b4a',
            '#56d798',
            '#ff8397',
            '#2970d5',
            '#6920d4',
            '#f980d5'
          ]
        });
        this.chartLabels.push(...res.label);
      }
    });
  }
}
