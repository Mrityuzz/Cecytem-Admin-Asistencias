import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private tareas = [
    { id: 1, titulo: 'Revisión de oficios', estado: 'Pendiente' },
    { id: 2, titulo: 'Entrega de reportes internos', estado: 'En curso' },
    { id: 3, titulo: 'Circular de reunión', estado: 'Finalizada' }
  ];

  private notificaciones = [
    { id: 1, mensaje: 'Reunión programada para el lunes 9 AM' },
    { id: 2, mensaje: 'Nueva circular interna publicada' }
  ];

  getTareas() {
    return this.tareas;
  }

  getNotificaciones() {
    return this.notificaciones;
  }
}
