import {Component, OnInit} from '@angular/core';
import {DataserviceService} from "../service/dataservice.service";

@Component({
  selector: 'app-blockcompare',
  templateUrl: './blockcompare.component.html',
  styleUrls: ['./blockcompare.component.css']
})
export class BlockcompareComponent implements OnInit {
  // Array, welches Inhalt und Styles der Blöcke speichert. [styles][inhalt]
  blockcontents: string[][] =[[],[]];
  // Speichert die verfügbaren dates in sortierter Reihenfolge
  dates: Date[] = Object.values(this.dataservice.sortByDate(this.dataservice.forecast_one)['date']);
  // Speichert die aktuell verglichenen Daten. Wenn keine verglichen werden = -1
  comparedDates: number[] = [-1,-1];
  // speichert die CSS Klasse füt den Block
  vBlockClass = 'invisibleBlock';

  constructor(private dataservice: DataserviceService) {
    for(let i = 0; i < 6; i++){
      this.blockcontents[1].push('display: none');
    }
  }

  /**
   * Wird aufgerufen, wenn ein <select> seine value ändert.
   * @param firstOrSecond Welches <select> hat seinen Wert geändert
   * @param newIndex index des Datums im Datumssortierten Forecast-Array
   */
  selectedDateChanged(firstOrSecond: number, newIndex: any): void{
    newIndex = parseInt(newIndex);
    this.comparedDates[firstOrSecond-1] = newIndex;
    if(this.comparedDates[0] != -1 && this.comparedDates[1] != -1){
      this.compare();
    } else {
      for(let i = 0; i < 6; i++){
        this.blockcontents[0][i] = 'display: none;';
        this.blockcontents[1][i] = '';
        this.vBlockClass = 'invisibleBlock';
      }
    }
  }

  /**
   * Bildet zwei Data Arrays für die, zu vergleichenden, Tage und errechnet anhand der Werte eine prozentuale Größe.
   * Diese wird an setBlockStyles() weitergegeben.
   * @param indexA
   * @param indexB
   */
  compare(indexA: number  = this.comparedDates[0], indexB: number = this.comparedDates[1]): void{
    let dataA: number[] = this.dataservice.getValsFromDate(this.dates[indexA]);
    let dataB: number[] = this.dataservice.getValsFromDate(this.dates[indexB]);
    let maxValA = this.dataservice.getHighestValOfArr(dataA);
    let maxValB = this.dataservice.getHighestValOfArr(dataB);
    for(let i = 0; i < 3; i++){
      this.setBlockStyles(i, Math.round(dataA[i]/maxValA*80), dataA[i]);
      this.setBlockStyles(i+3, Math.round(dataB[i]/maxValB*80), dataB[i]);
    }
  }

  /**
   * Setzt die Styles der Blöcke
   * @param blockIndex
   * @param width
   * @param value
   */
  setBlockStyles(blockIndex: number, width: number, value: number): void{
    let color: string;
    if(blockIndex == 2 || blockIndex == 5){
      color = 'rgb(249,199,97)';
    } else if(blockIndex == 1 || blockIndex == 4) {
      color = 'rgb(147,203,121)';
    } else {
      color = 'rgb(85,114,195)';
    }
    this.blockcontents[0][blockIndex] = 'display: inline-block; height: ' + width + 'px; width: ' + width + 'px; background-color: ' + color;
    this.blockcontents[1][blockIndex] = String(value);
    this.vBlockClass = 'visualBlock';
  }

  ngOnInit(): void {
  }

}
