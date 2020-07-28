import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.sass']
})
export class GraphDataComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 34, 55], label: 'Product A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', '', ''];
  public lineChartOptions: ChartOptions = {
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
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];

  doughnutChartLabels: Label[] = ['PUBG', 'Call of Duty', 'Fortnite'];
  doughnutChartData: MultiDataSet = [
    [53, 30]
  ];
  doughnutChartType: ChartType = 'doughnut';
  colorsChart: any[] = [{ backgroundColor: ['#5BC790', '#ECB741', '#CD5A59']}];
  options: any = {
    legend: {display: false},
    responsive: true,
    tooltips: {
      enabled: false
    },
    plugins: {
      center: {
        // text: this.contentData && this.contentData.txtPrimaTotal ? this.contentData.txtPrimaTotal : '',
        // text2: this.contentData && this.contentData.primaTotal ? this.contentData.primaTotal : '',
        txtPrimaTotal: 'REVENUE',
        primaTotal: '200,000$',
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
        ctx.fillText(config.txtPrimaTotal, centerX, centerY - 40);
        ctx.font = `16px normal Open Sans`;
        ctx.fillStyle = '#33445F';
        ctx.fillText(config.primaTotal, centerX, centerY - 20);
      }
    }
  }];

  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }

}
