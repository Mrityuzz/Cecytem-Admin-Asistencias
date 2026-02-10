import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './entrada';
import { SalidaComponent } from './salida';
import { HistorialComponent } from './historial';

const routes: Routes = [
  { path: 'entrada', component: EntradaComponent },
  { path: 'salida', component: SalidaComponent },
  { path: 'historial', component: HistorialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule {}
