import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaService } from './cuenta.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.scss']
})
export class PerfilComponent implements OnInit {
  usuario: any;

  constructor(private cuentaService: CuentaService) {}

  ngOnInit() {
    this.usuario = this.cuentaService.getUsuario();
  }
}
