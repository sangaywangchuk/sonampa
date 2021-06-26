import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  chartDataInfo = new BehaviorSubject(undefined);
  constructor() { }

  setChartDataInfo(data): void {
    this.chartDataInfo.next(data);
    console.log('data sent');
  }

  getChartDataInfo(): Observable<{dataset?: {data?: number[], label?: string}, label?: string[]}> {
    return this.chartDataInfo as Observable<{dataset?: {data?: number[], label?: string}, label?: string[]}>;
  }
}
