import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesService } from './reportes.service';

@Component({
  selector: 'app-estadisticas-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.html',
  styleUrls: ['./estadisticas.scss']
})
export class EstadisticasReportesComponent implements OnInit {
  estadisticas: any;

  constructor(private reportesService: ReportesService) {}

  ngOnInit() {
    this.estadisticas = this.reportesService.getEstadisticas();
  }
}
