import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CuentaService } from './cuenta.service';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.scss']
})
export class ConfiguracionComponent {
  nuevaPassword = '';

  constructor(private cuentaService: CuentaService) {}

  cambiarPassword() {
    this.cuentaService.cambiarPassword(this.nuevaPassword);
    alert('Contraseña cambiada correctamente');
    this.nuevaPassword = '';
  }
}
