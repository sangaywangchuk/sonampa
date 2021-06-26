import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataServiceService} from '../../service/data-service/data-service.service';
import {ChartModel, plantDiseaseData, PlantDiseaseData, plantDiseaseType} from '../../model/chart-model';


@Component({
  selector: 'app-plant-disease-analysis',
  templateUrl: './plant-disease-analysis.component.html',
  styleUrls: ['./plant-disease-analysis.component.css']
})
export class PlantDiseaseAnalysisComponent implements OnInit {
  analysisTypes = [
    'Plant Disease type Analysis with all Dzongkhag',
    'Most common disease type occur in Dzongkhag',
  ];
  plantDiseaseData: PlantDiseaseData[];
  plantList = [
    'Apple',
    'Maize',
    'Orange',
    'Peach',
    'Potato',
    'Rice'
  ];

  dzongkhag = [
    'thimphu',
    'paro',
  ];

  filteredDataByPlantName: PlantDiseaseData[] = [];
  chartData = {
    data: [],
    label: '',
  };
  diseaseType: string[] = [];
  diseaseStatus = false;
  counts = {};
  chartLabel = [];
  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.plantDiseaseData = plantDiseaseData;
  }

  onSelectCategory(item: string): void {
  }

  onSelectPlant(item: string): void {
    this.diseaseStatus = true;
    this.diseaseType = [];
    this.diseaseType = plantDiseaseType[item];
    this.filteredDataByPlantName = [];
    this.filteredDataByPlantName = this.plantDiseaseData.filter(res => {
      return (res.disease.crop === item);
    });
    this.chartLabel.length = 0;
    this.counts = {};
    this.counts = this.filteredDataByPlantName.reduce((acc, value) => ({
      ...acc,
      [value.dzongkhag]: (acc[value.dzongkhag] || 0) + 1
    }), {});
    console.log(this.counts);
    this.dzongkhag.forEach(dzongkhag => {
      console.log(dzongkhag);
      this.chartData.data.push(this.counts[dzongkhag] || 0);
      this.chartLabel.push(dzongkhag);
    });
    this.chartData.label = item;
    this.dataService.setChartDataInfo({label: this.chartLabel, dataset: this.chartData});
  }


  onSelectDisease(value: string): void {
  }

  generateChartData(filteredDataByPlantName: PlantDiseaseData[]): ChartModel {
    const counts = filteredDataByPlantName.reduce((acc, value) => ({
      ...acc,
      [value.dzongkhag]: (acc[value.dzongkhag] || 0) + 1
    }), {});
    console.log(counts);
    return {chartData: undefined, chartLabels: [], chartLegend: false, chartOptions: undefined, chartType: 'bar'};
  }
}
