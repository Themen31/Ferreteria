import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewProductonComponent } from './productonuevo/new-producton/new-producton.component';
import { ProductonListComponent } from './productonuevo/producton-list/producton-list.component';
import { EditProductonComponent } from './productonuevo/edit-producton/edit-producton.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormProductonComponent } from './productonuevo/shared/form-historiaclinica/form-historiaclinica.component';
//import { FormEditProductonComponent } from './historiasclinicas/shared/form-historiaclinica/form-edit-historiaclinica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { NewUsuarioComponent } from './usuarios/new-usuario/new-usuario.component';
import { FormUsuarioComponent } from './usuarios/shared/form-cita/form-cita.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ProductonListComponent,
    NewProductonComponent,
    EditProductonComponent,
    FormProductonComponent,
    //FormEditHistoriaclinicaComponent,
    UsuarioListComponent,
    EditUsuarioComponent,
    NewUsuarioComponent,
    FormUsuarioComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
