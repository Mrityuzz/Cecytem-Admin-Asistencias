import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  private administrativos = [
    { id: 1, nombre: 'Administrativo A', puesto: 'Secretaria', estado: 'Activo' },
    { id: 2, nombre: 'Administrativo B', puesto: 'Oficina de control escolar', estado: 'Activo' },
    { id: 3, nombre: 'Administrativo C', puesto: 'Dirección administrativa', estado: 'Inactivo' }
  ];

  private alertas = [
    { id: 1, mensaje: 'Acceso fuera de horario detectado en oficina administrativa' },
    { id: 2, mensaje: 'Ausencia registrada en área administrativa' }
  ];

  getAdministrativos() {
    return this.administrativos;
  }

  getAlertas() {
    return this.alertas;
  }

  getReportesGlobales() {
    return [
      { area: 'Administrativos', accesos: 25, ausencias: 3 }
    ];
  }
}
