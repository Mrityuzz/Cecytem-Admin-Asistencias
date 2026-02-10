import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminService } from './superadmin.service';

@Component({
  selector: 'app-superadmin-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class SuperadminUsuariosComponent implements OnInit {
  administrativos: any[] = [];

  constructor(private superadminService: SuperadminService) {}

  ngOnInit() {
    this.administrativos = this.superadminService.getAdministrativos();
  }

  activar(admin: any) {
    admin.estado = 'Activo';
  }

  desactivar(admin: any) {
    admin.estado = 'Inactivo';
  }
}
