import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditProductonComponent } from './productonuevo/edit-producton/edit-producton.component';
import { NewProductonComponent } from './productonuevo/new-producton/new-producton.component';
import { ProductonListComponent } from './productonuevo/producton-list/producton-list.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'Producto',
        component: ProductonListComponent,
      },
      {
        path: 'Producto/new',
        component: NewProductonComponent,
      },
      {
        path: 'Producto/:id/editar',
        component: EditProductonComponent,
      },
      {
        path: 'Usuarios',
        component: UsuarioListComponent,
      },
      {
        path: 'Usuarios/new',
        component: NewUsuarioComponent,
      },
      {
        path: 'Usuarios/:id/editar',
        component: EditUsuarioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
