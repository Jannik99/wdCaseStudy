import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartComponent} from "./chart/chart.component";
import {BlockcompareComponent} from "./blockcompare/blockcompare.component";

const routes: Routes = [
  {path: '', component: ChartComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'blockcompare', component: BlockcompareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
