import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsistenciaService } from './asistencia.service';

@Component({
  selector: 'app-salida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salida.html',
  styleUrls: ['./salida.scss']
})
export class SalidaComponent {
  persona = '';

  constructor(private asistenciaService: AsistenciaService) {}

  registrarSalida() {
    this.asistenciaService.addRegistro({
      tipo: 'Salida',
      fecha: new Date().toLocaleString(),
      persona: this.persona
    });
    alert('Salida registrada');
    this.persona = '';
  }
}
