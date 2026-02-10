import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsistenciaService } from './asistencia.service';

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entrada.html',
  styleUrls: ['./entrada.scss']
})
export class EntradaComponent {
  persona = '';

  constructor(private asistenciaService: AsistenciaService) {}

  registrarEntrada() {
    this.asistenciaService.addRegistro({
      tipo: 'Entrada',
      fecha: new Date().toLocaleString(),
      persona: this.persona
    });
    alert('Entrada registrada');
    this.persona = '';
  }
}
