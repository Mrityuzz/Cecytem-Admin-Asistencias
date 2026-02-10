import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActividadesRoutingModule } from './actividades-routing-module'; 
import { ListaComponent } from './lista';
import { DetalleComponent } from './detalle';
import { FormularioComponent } from './formulario';

@NgModule({
  imports: [        
    CommonModule,
    FormsModule,
    ActividadesRoutingModule,
    ListaComponent,
    DetalleComponent,
    FormularioComponent
  ]
})
export class ActividadesModule {}
