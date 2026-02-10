import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private registros = [
    { id: 1, tipo: 'Entrada', fecha: '2026-02-05 08:00', persona: 'Administrativo A' }, 
    { id: 2, tipo: 'Salida', fecha: '2026-02-05 14:00', persona: 'Administrativo A' }
  ];

  getRegistros() {
    return this.registros;
  }

  addRegistro(registro: any) {
    registro.id = this.registros.length + 1;
    this.registros.push(registro);
  }
}
