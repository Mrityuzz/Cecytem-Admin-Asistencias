import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'asistencia', loadChildren: () => import('./modules/asistencia/asistencia.module').then(m => m.AsistenciaModule) },
  { path: 'actividades', loadChildren: () => import('./modules/actividades/actividades.module').then(m => m.ActividadesModule) },
  { path: 'reportes', loadChildren: () => import('./modules/reportes/reportes.module').then(m => m.ReportesModule) },
  { path: 'cuenta', loadChildren: () => import('./modules/cuenta/cuenta.module').then(m => m.CuentaModule) },
  { path: 'superadmin', loadChildren: () => import('./modules/superadmin/superadmin.module').then(m => m.SuperadminModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
