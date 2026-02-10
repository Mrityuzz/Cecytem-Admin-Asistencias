import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminService } from './superadmin.service';

@Component({
  selector: 'app-superadmin-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.scss']
})
export class SuperadminReportesComponent implements OnInit {
  reportes: any[] = [];

  constructor(private superadminService: SuperadminService) {}

  ngOnInit() {
    this.reportes = this.superadminService.getReportesGlobales();
  }
}
