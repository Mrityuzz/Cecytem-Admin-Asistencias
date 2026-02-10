import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperadminDashboardComponent } from './dashboard';
import { SuperadminUsuariosComponent } from './usuarios';
import { SuperadminReportesComponent } from './reportes';

const routes: Routes = [
  { path: 'dashboard', component: SuperadminDashboardComponent },
  { path: 'usuarios', component: SuperadminUsuariosComponent },
  { path: 'reportes', component: SuperadminReportesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule {}
