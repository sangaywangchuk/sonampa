import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../service/data-service/data-service.service';
import { plantDiseaseData, PlantDiseaseData, plantDiseaseType} from '../../model/chart-model';


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
    'mongar',
    'thimphu',
    'tashigang',
    'haa',
    'paro',
    'trongsa',
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
  dzongkhagList = [
    'mongar',
    'thimphu',
    'tashigang',
    'haa',
    'paro',
    'trongsa',

  ];
  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.plantDiseaseData = plantDiseaseData;
    this.counts = this.plantDiseaseData.reduce((acc, value) => ({
      ...acc,
      [value.dzongkhag]: (acc[value.dzongkhag] || 0) + 1
    }), {});
    console.log(this.counts);

    this.dzongkhag.forEach(dzongkhag => {
        this.chartData.data.push(this.counts[dzongkhag]);
        this.chartLabel.push(dzongkhag);
      });
    console.log(this.chartData.data, this.chartLabel);
    this.chartData.label = 'disease';
    this.dataService.setChartDataInfo({label: this.chartLabel, dataset: this.chartData});
  }

  onSelectCategory(item: string): void {
  }

  onSelectPlant(item: string): void {
    this.diseaseType = [];
    this.diseaseType = plantDiseaseType[item];
    this.filteredDataByPlantName.length = 0;
    this.filteredDataByPlantName = this.plantDiseaseData.filter(res => {
      return (res.disease.crop === item);
    });
    this.chartLabel.length = 0;
    this.counts = {};
    this.counts = this.filteredDataByPlantName.reduce((acc, value) => ({
      ...acc,
      [value.dzongkhag]: (acc[value.dzongkhag] || 0) + 1
    }), {});
    this.chartData.data.length = 0;
    this.chartLabel.length = 0;
    this.chartData.label = '';
    this.dzongkhag.forEach(dzongkhag => {
      this.chartData.data.push(this.counts[dzongkhag]);
      this.chartLabel.push(dzongkhag);
    });
    this.chartData.label = item;
    this.dataService.setChartDataInfo({label: this.chartLabel, dataset: this.chartData});
  }


  onSelectCrop(value: string): void {
    let cropList = this.filteredDataByPlantName;
    cropList = cropList.filter(res => {
      return (res.disease.crop === value);
    });
    this.counts = {};
    this.counts = cropList.reduce((acc, data) => ({
      ...acc,
      [data.disease.diseaseName]: (acc[data.disease.diseaseName] || 0) + 1
    }), {});
    this.diseaseType = plantDiseaseType[value];
    this.chartData.data = [];
    this.chartLabel = [];
    this.diseaseType.forEach(disease => {
      this.chartData.data.push(this.counts[disease]);
      this.chartLabel.push(disease);
    });
    this.chartData.label = value;
    this.dataService.setChartDataInfo({label: this.chartLabel, dataset: this.chartData});

  }

  onSelectDzongkha(value: string): void {
    this.diseaseStatus = true;
    console.log(this.plantList);
    this.filteredDataByPlantName.length = 0;
    this.filteredDataByPlantName = this.plantDiseaseData.filter(res => {
      return (res.dzongkhag === value);
    });
  }
}
