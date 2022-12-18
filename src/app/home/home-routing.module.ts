import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { EditProductoComponent } from './productos/edit-producto/edit-producto.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { NewProductoComponent } from './productos/new-producto/new-producto.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path:'mascotas',
        component: ProductoListComponent,
      },
      {
        path:'mascotas/new',
        component: NewProductoComponent,
      },
      {
        path:'mascotas/:id/edit',
        component: EditProductoComponent,
      },
      {
        path:'clientes',
        component: ClienteListComponent,
      },
      {
        path:'clientes/new',
        component: NewClienteComponent,
      },
      {
        path:'clientes/:id/edit',
        component: EditClienteComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
