import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private usuario = {
    nombre: 'Administrativo A',
    correo: 'admin@institucion.mx',
    puesto: 'Secretaria',
    telefono: '443-000-0000'
  };

  getUsuario() {
    return this.usuario;
  }

  actualizarUsuario(data: any) {
    this.usuario = { ...this.usuario, ...data };
  }

  cambiarPassword(nueva: string) {
    console.log('Contraseña cambiada:', nueva);
  }
}
