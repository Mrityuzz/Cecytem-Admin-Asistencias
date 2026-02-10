import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private historial = [
    { id: 1, tipo: 'Entrada', fecha: '2026-02-05 08:00', persona: 'Administrativo A' },
    { id: 2, tipo: 'Salida', fecha: '2026-02-05 14:00', persona: 'Administrativo A' },
    { id: 3, tipo: 'Actividad', fecha: '2026-02-06 09:30', persona: 'Administrativo B', detalle: 'Entrega de oficio interno' }
  ];

  getHistorial() {
    return this.historial;
  }

  getEstadisticas() {
    return {
      entradas: 15,
      salidas: 15,
      actividades: 8,
      cumplimiento: '90%'
    };
  }
}
