import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.html',
  styleUrls: ['./notificaciones.scss'],
  standalone: true,
  imports: [NgFor]
})
export class NotificacionesComponent {
  notificaciones = [
    { mensaje: 'Oficio pendiente de revisión' },
    { mensaje: 'Reporte interno en curso' },
    { mensaje: 'Circular de reunión finalizada' }
  ];
}
