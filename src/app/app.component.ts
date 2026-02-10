import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tituloModulo = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('dashboard')) this.tituloModulo = 'Dashboard Administrativo';
        else if (event.url.includes('actividades')) this.tituloModulo = 'Actividades';
        else if (event.url.includes('asistencia')) this.tituloModulo = 'Asistencia';
        else if (event.url.includes('reportes')) this.tituloModulo = 'Reportes';
        else if (event.url.includes('cuenta')) this.tituloModulo = 'Cuenta';
        else this.tituloModulo = '';
      }
    });
  }
}
