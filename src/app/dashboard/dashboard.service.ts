import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getBigCharts() {
    return [
      {
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268],
      },
      {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766],
      },
      {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628],
      },
      {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201],
      },
      {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ];
  }

  getCards() {
    return [81, 54, 78, 48];
  }

  getPieCharts() {
    return [
      {
        name: 'Chrome',
        y: 55.41,
        sliced: true,
        selected: true,
      },
      {
        name: 'IE',
        y: 11.84,
      },
      {
        name: 'Firefox',
        y: 23.85,
      },
      {
        name: 'Edge',
        y: 4.67,
      },
      {
        name: 'Safari',
        y: 4.18,
      },
      {
        name: 'Opera',
        y: 1.6,
      },
      {
        name: 'Other',
        y: 2.61,
      },
    ];
  }
}
