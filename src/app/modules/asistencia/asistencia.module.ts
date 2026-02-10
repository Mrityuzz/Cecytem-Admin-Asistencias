import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsistenciaRoutingModule } from './asistencia-routing-module';
import { EntradaComponent } from './entrada';
import { SalidaComponent } from './salida';
import { HistorialComponent } from './historial';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AsistenciaRoutingModule,
    EntradaComponent,
    SalidaComponent,
    HistorialComponent
  ]
})
export class AsistenciaModule {}
