import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  private actividades = [
    { id: 1, nombre: 'Reunión administrativa', descripcion: 'Revisión de oficios internos', fecha: '2026-02-10', lugar: 'Sala de juntas', estado: 'Pendiente' }, 
    { id: 2, nombre: 'Entrega de reportes', descripcion: 'Entrega mensual de documentos', fecha: '2026-02-15', lugar: 'Oficina de control escolar', estado: 'Pendiente' }, 
    { id: 3, nombre: 'Circular interna', descripcion: 'Difusión de lineamientos', fecha: '2026-02-20', lugar: 'Dirección administrativa', estado: 'Pendiente' }
  ];

  getActividades() {
    return this.actividades;
  }

  getActividadById(id: number) {
    return this.actividades.find(a => a.id === id);
  }

  addActividad(actividad: any) {
    actividad.id = this.actividades.length + 1;
    this.actividades.push(actividad);
  }
}
