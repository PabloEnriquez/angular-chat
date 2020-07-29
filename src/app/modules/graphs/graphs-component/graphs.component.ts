import { Component, OnInit } from '@angular/core';
import { GraphData } from 'src/app/models/models';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit {

  graphOne: GraphData;

  constructor() { }

  ngOnInit(): void {
    this.graphOne = {
      lineChartData: [65, 59, 80, 81, 56, 55, 40, 34, 81, 56, 55, 40, 34],
      lineChartColor: {
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)'
      },
      doughnutChartData: [ 80000, 120000 ],
      doughnutColor: {
        backgroundColor: ['#5BC790', '#ECB741']
      },
      txtCategory: 'REVENUE',
      quantity: 200000,
      isRevenue: true,
      leftLabel: 'Tablet',
      leftData: 120000,
      rightLabel: 'Smartphone',
      righData: 80000
    };
  }

}
