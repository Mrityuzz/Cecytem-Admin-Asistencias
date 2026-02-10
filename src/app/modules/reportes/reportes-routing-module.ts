import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialReportesComponent } from './historial';
import { EstadisticasReportesComponent } from './estadisticas';

const routes: Routes = [
  { path: 'historial', component: HistorialReportesComponent },
  { path: 'estadisticas', component: EstadisticasReportesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule {}
