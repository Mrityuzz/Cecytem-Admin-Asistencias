import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista';
import { DetalleComponent } from './detalle';
import { FormularioComponent } from './formulario';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'formulario', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule {}
