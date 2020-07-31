import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
import { GraphData } from 'src/app/models/models';
import { formatCurrency, formatNumber } from '@angular/common';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.sass']
})
export class GraphDataComponent implements OnInit {

  @Input() graphData: GraphData;

  // line chart settings
  lineChartData = [];
  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = {
    legend: {display: false},
    responsive: true,
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };
  lineChartColors: Color[] = [
    // {
    //   backgroundColor: '',
    //   borderColor: '',
    // },
  ];
  lineChartLegend = false;
  lineChartType = 'line';

  // doughnut chart settings
  doughnutChartLabels: Label[] = [];
  doughnutChartData: number[] = [];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: any[] = [];
  doughnutChartOptions: any = {
    legend: {display: false},
    responsive: true,
    tooltips: {
      enabled: false
    },
    plugins: {
      center: {
        txtCategory: '',
        quantity: '',
        text3: '',
        fontColor: '#FF6384',
        fontFamily: '"Open Sans"',
        fontSize: 51,
        fontSize2: 28,
        fontSize3: 56,
        fontStyle: 'normal'
      }
    },
    cutoutPercentage: 90,
    events: []
  };
  doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
    afterDraw(chart): void {
      if (chart.config.options.plugins.center) {
        // obtener objeto custom de configuración
        const config = chart.config.options.plugins.center;
        // calcular posición
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        const ctx = chart.ctx;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `11px normal Open Sans`;
        ctx.fillStyle = '#647085';
        ctx.fillText(config.txtCategory, centerX, centerY - 40);
        ctx.font = `16px normal Open Sans`;
        ctx.fillStyle = '#33445F';
        ctx.fillText(config.quantity, centerX, centerY - 20);
      }
    }
  }];

  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  tabletData: string;
  smartPhData: string;

  constructor() { }

  ngOnInit(): void {
    this.lineChartData = this.graphData.lineChartData;
    this.lineChartLabels = this.graphData.lineChartData.map(datElem => '');
    this.lineChartColors.push(this.graphData.lineChartColor);
    this.doughnutChartData = this.graphData.doughnutChartData;
    this.doughnutChartColors.push(this.graphData.doughnutColor);
    this.doughnutChartOptions.plugins.center.txtCategory = this.graphData.txtCategory;
    if ( this.graphData.isRevenue ) {
      this.doughnutChartOptions.plugins.center.quantity = formatCurrency(this.graphData.quantity, 'de-DE', '€');
    } else {
      this.doughnutChartOptions.plugins.center.quantity = formatNumber(this.graphData.quantity, 'de-DE');
    }
  }

  getPercentage(targetValue: number): string {
    return `${ ((targetValue * 100) / this.graphData.quantity) }`;
  }

  getCurrency(elemValue: number): string {
    return formatCurrency(elemValue, 'de-DE', '€');
  }

  getNumber(elemValue: number): string {
    return formatNumber(elemValue, 'de-DE');
  }

}
