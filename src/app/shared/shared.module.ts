import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material/material.module';
import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AreaComponent } from './area/area.component';
import { CardComponent } from './card/card.component';
import { PieChartComponent } from '../dashboard/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieChartComponent
  ]
})
export class SharedModule { }
