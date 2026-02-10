import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard';
import { HomeComponent } from './home';
import { NotificacionesComponent } from './notificaciones';
import { DashboardRoutingModule } from './dashboard-routing-module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardComponent,      
    HomeComponent,           
    NotificacionesComponent  
  ]
})
export class DashboardModule {}
