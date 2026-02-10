import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminService } from './superadmin.service';

@Component({
  selector: 'app-superadmin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class SuperadminDashboardComponent implements OnInit {
  alertas: any[] = [];

  constructor(private superadminService: SuperadminService) {}

  ngOnInit() {
    this.alertas = this.superadminService.getAlertas();
  }
}
