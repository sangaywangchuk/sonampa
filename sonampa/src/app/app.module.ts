import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapViewComponent} from './map-view/map-view.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {AngularFireModule} from '@angular/fire';

import { PlantDiseaseAnalysisComponent } from './plant-disease-analysis-dashboard/plant-disease-analysis/plant-disease-analysis.component';
import { GenerateChartComponent } from './shared/generate-chart/generate-chart.component';
import {ChartsModule, ThemeService} from 'ng2-charts';
import { GraphComponent } from './graph/graph.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDNaiqc4gAyA97ZZ7W7xRNqMSckHi0s5sg',
  authDomain: 'hackathon-4f45a.firebaseapp.com',
  projectId: 'hackathon-4f45a',
  storageBucket: 'hackathon-4f45a.appspot.com',
  messagingSenderId: '278492018357',
  appId: '1:278492018357:web:4b9beec97215a647e770fc',
  measurementId: 'G-1QGRSLNZ3S'
};

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    PlantDiseaseAnalysisComponent,
    GenerateChartComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
