import { Injectable } from '@angular/core';
import * as data from '../study.json';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  forecasts: any = data;
  forecast_one = {...this.forecasts.forecast_one};
  forecast_two = {...this.forecasts.forecast_two};
  forecast_three = {...this.forecasts.forecast_three};

  constructor() {
  }

  /**
   * Gibt ein Array mit den Values jedes Forecasts zu einem bestimmten Tag zurück.
   * @param date Der Tag
   */
  getValsFromDate(date: Date){
    let indexA = this.forecast_one['date'].indexOf(date);
    let indexB = this.forecast_two['date'].indexOf(date);
    let indexC = this.forecast_three['date'].indexOf(date);
    return [this.forecast_one['value'][indexA], this.forecast_two['value'][indexB], this.forecast_three['value'][indexC]];
  }

  /**
   * Sortiert das gegebene Forecast-Array mittels Bubblesort nach Datum.
   * @param arr Forecast Array
   */
  sortByDate(arr: any){
    let sortedVal: number[] = arr['value'];
    let sortedDate: Date[] = arr['date'];
    for (let i = 0; i < sortedDate.length; i++){
      for(let j = 0; j < sortedDate.length-(i+1); j++){
        if(sortedDate[j] > sortedDate[j+1]){
          this.swap(sortedVal, j, j+1);
          this.swap(sortedDate, j, j+1);
        }
      }
    }
    return {date: sortedDate, value: sortedVal};
  }

  /**
   * Sortiert einen Forecast mittels Bubblesort von klein nach groß
   * @param arr Forecast Array
   */
  bubbleSort(arr: any): any{
    let sortedVal: number[] = arr['value'];
    let sortedDate: Date[] = arr['date'];
    for (let i = 0; i < sortedVal.length; i++){
      for(let j = 0; j < sortedVal.length-(i+1); j++){
        if(sortedVal[j] < sortedVal[j+1]){
          this.swap(sortedVal, j, j+1);
          this.swap(sortedDate, j, j+1);
        }
      }
    }
    return {date: sortedDate, value: sortedVal};
  }

  /**
   * Tauscht zwei Indizes eines Arrays.
   * @param arr gegebenes Array
   * @param indexA Index A
   * @param indexB Index B
   * @private
   */
  private static swap(arr: any[], indexA: number, indexB: number){
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }

  /**
   * Durchsucht ein 1-dimensionales Value-Array nach dem höchsten Wert und gibt ihn zurück
   * @param arr Das zu durchsuchende Array.
   */
  getHighestValOfArr(arr: any[]): number{
    let h = 0;
    arr.forEach((item) => {
      if(parseInt(item) > h){
        h = parseInt(item);
      }
    });
    return h;
  }

  /**
   * Durchsucht ein 1-dimensionales Value-Array nach dem niedrigsten Wert und gibt ihn zurück
   * @param arr Das zu durchsuchende Array.
   */
  getLowestValOfArr(arr: any[]): number{
    let h = 0;
    arr[1].forEach((item: number) => {
      if(item < h){
        h = item;
      }
    });
    return h;
  }

  /**
   * Gibt den Median eines 1-dimensionalen Value Arrays zurück
   * @param arr Das Array
   */
  getMedianOfArray(arr: number[]): number{
    let c = 0;
    let d = 0;
    arr.forEach((item: number) => {
      c++;
      d = d + item;
    })
    return d/c;
  }
}
