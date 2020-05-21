import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigCharts = [];
  cards = [];
  pieChart = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigCharts = this.dashboardService.getBigCharts();
    this.cards = this.dashboardService.getCards();
    this.pieChart = this.dashboardService.getPieCharts();

    // this.dataSource.paginator = this.paginator;
  }

}
