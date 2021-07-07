import {Component, OnInit} from '@angular/core';
import {DataserviceService} from "../service/dataservice.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  forecast1: { date: Date[]; value: number[] } = this.dataservice.sortByDate(this.dataservice.forecast_one);
  forecast2: { date: Date[]; value: number[] } = this.dataservice.sortByDate(this.dataservice.forecast_two);
  forecast3: { date: Date[]; value: number[] } = this.dataservice.sortByDate(this.dataservice.forecast_three);
  options: any;

  constructor(private dataservice: DataserviceService) {
  }

  /**
   * Füllt das Options-Objekt mit der Konfiguration für die Chart
   */
  ngOnInit(): void {
    this.options = {
      legend: {
        data: ['Forecast1', 'Forecast2', 'Forecast3'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: Object.values(this.forecast1['date']),
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Forecast1',
          type: 'bar',
          data: Object.values(this.forecast1.value)
        },
        {
          name: 'Forecast2',
          type: 'bar',
          data: Object.values(this.forecast2.value)
        },
        {
          name: 'Forecast3',
          type: 'bar',
          data: Object.values(this.forecast3.value)
        },
      ],
    };
  }
}
