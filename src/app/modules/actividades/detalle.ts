import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from './actividades.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.scss']
})
export class DetalleComponent implements OnInit {
  actividad: any;

  constructor(private route: ActivatedRoute, private actividadesService: ActividadesService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.actividad = this.actividadesService.getActividadById(id);
  }
}
