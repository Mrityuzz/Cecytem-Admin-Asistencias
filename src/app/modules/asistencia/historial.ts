import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaService } from './asistencia.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrls: ['./historial.scss']
})
export class HistorialComponent implements OnInit {
  registros: any[] = [];

  constructor(private asistenciaService: AsistenciaService) {}

  ngOnInit() {
    this.registros = this.asistenciaService.getRegistros();
  }
}
