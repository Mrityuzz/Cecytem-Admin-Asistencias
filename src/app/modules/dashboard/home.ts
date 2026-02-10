import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  tareas: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.tareas = this.dashboardService.getTareas();
  }
}
