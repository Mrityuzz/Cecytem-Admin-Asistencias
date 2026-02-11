import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadesService } from './actividades.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.html',
  styleUrls: ['./lista.scss']
})
export class ListaComponent implements OnInit {
  actividades: any[] = [];

  constructor(private actividadesService: ActividadesService, private router: Router) {}

  ngOnInit() {
    this.actividades = this.actividadesService.getActividades();
  }

  verDetalle(id: number) {
    this.router.navigate(['/actividades/detalle', id]);
  }

  irFormulario() {
    this.router.navigate(['/actividades/formulario']); 
  }
}
