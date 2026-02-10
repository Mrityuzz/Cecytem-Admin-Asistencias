import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CuentaRoutingModule } from './cuenta-routing-module';
import { PerfilComponent } from './perfil';
import { ConfiguracionComponent } from './configuracion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CuentaRoutingModule,
    PerfilComponent,
    ConfiguracionComponent
  ]
})
export class CuentaModule {}
