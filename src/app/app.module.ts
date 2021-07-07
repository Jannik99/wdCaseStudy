import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartComponent } from './chart/chart.component';
import { BlockcompareComponent } from './blockcompare/blockcompare.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BlockcompareComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
