import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing-module';
import { SuperadminDashboardComponent } from './dashboard';
import { SuperadminUsuariosComponent } from './usuarios';
import { SuperadminReportesComponent } from './reportes';

@NgModule({
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    SuperadminDashboardComponent,
    SuperadminUsuariosComponent,
    SuperadminReportesComponent
  ]
})
export class SuperadminModule {}
