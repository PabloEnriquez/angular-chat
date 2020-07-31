import { Injectable } from '@angular/core';
import { GraphData } from '../models/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  graphList$ = new BehaviorSubject<GraphData[]>(null);

  constructor() { }

  getGraphsData(): void {
    const data: GraphData[] = [
      {
        lineChartData: [65, 59, 80, 81, 56, 55, 40, 34, 81, 56, 55, 40],
        lineChartColor: {
          backgroundColor: '#FFFFE3',
          borderColor: '#9ACD32'
        },
        doughnutChartData: [ 80000, 120000 ],
        doughnutColor: {
          backgroundColor: ['#006400', '#9ACD32']
        },
        txtCategory: 'REVENUE',
        quantity: 200000,
        isRevenue: true,
        leftLabel: 'Tablet',
        leftData: 120000,
        rightLabel: 'Smartphone',
        righData: 80000
      },
      {
        lineChartData: [65, 70, 65, 75, 66, 60, 68, 75, 62, 55, 58, 65, 76, 68, 65, 69, 75],
        lineChartColor: {
          backgroundColor: '#e3f2fd',
          borderColor: '#64b5f6'
        },
        doughnutChartData: [ 30000000, 20000000 ],
        doughnutColor: {
          backgroundColor: ['#0d47a1', '#42a5f5']
        },
        txtCategory: 'IMPRESIONS',
        quantity: 50000000,
        isRevenue: false,
        leftLabel: 'Tablet',
        leftData: 20000000,
        rightLabel: 'Smartphone',
        righData: 30000000
      },
      {
        lineChartData: [65, 69, 73, 77, 78, 75, 73, 70, 74, 76, 75, 76, 73, 70, 69, 70, 72, 73, 78],
        lineChartColor: {
          backgroundColor: '#fff9c4',
          borderColor: '#fdd835'
        },
        doughnutChartData: [ 120000000, 480000000 ],
        doughnutColor: {
          backgroundColor: ['#fb8c00', '#ffca28']
        },
        txtCategory: 'VISITS',
        quantity: 600000000,
        isRevenue: false,
        leftLabel: 'Tablet',
        leftData: 480000000,
        rightLabel: 'Smartphone',
        righData: 120000000
      }
    ];
    this.graphList$.next(data);
  }

}
