import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing-module';
import { HistorialReportesComponent } from './historial';
import { EstadisticasReportesComponent } from './estadisticas';

@NgModule({
  imports: [
    CommonModule,
    ReportesRoutingModule,
    HistorialReportesComponent,
    EstadisticasReportesComponent
  ]
})
export class ReportesModule {}
