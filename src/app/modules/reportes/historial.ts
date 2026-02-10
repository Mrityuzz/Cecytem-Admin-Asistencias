import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesService } from './reportes.service';

@Component({
  selector: 'app-historial-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrls: ['./historial.scss']
})
export class HistorialReportesComponent implements OnInit {
  historial: any[] = [];

  constructor(private reportesService: ReportesService) {}

  ngOnInit() {
    this.historial = this.reportesService.getHistorial();
  }
}
