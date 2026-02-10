import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.scss']
})
export class FormularioComponent {
  actividad = {
    nombre: '',
    descripcion: '',
    fecha: '',
    lugar: '',
    estado: 'Pendiente'
  };

  guardarActividad() {
    console.log('Actividad guardada:', this.actividad);
    alert('Actividad registrada correctamente');
    this.actividad = { nombre: '', descripcion: '', fecha: '', lugar: '', estado: 'Pendiente' };
  }
}
