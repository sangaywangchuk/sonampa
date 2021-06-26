import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantDiseaseAnalysisComponent } from './plant-disease-analysis-dashboard/plant-disease-analysis/plant-disease-analysis.component';
import { GenerateChartComponent } from './shared/generate-chart/generate-chart.component';
import {ChartsModule, ThemeService} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    PlantDiseaseAnalysisComponent,
    GenerateChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
