import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { NewProductoComponent } from './productos/new-producto/new-producto.component';
import { EditProductoComponent } from './productos/edit-producto/edit-producto.component';
import { FormProductoComponent } from './productos/shared/form-mascota/form-mascota.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { FormClienteComponent } from './clientes/shared/form-cliente/form-cliente.component';


@NgModule({
  declarations: [LayoutComponent, IndexComponent, ProductoListComponent, NewProductoComponent, EditProductoComponent, FormProductoComponent, ClienteListComponent, NewClienteComponent, EditClienteComponent, FormClienteComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class HomeModule {}
