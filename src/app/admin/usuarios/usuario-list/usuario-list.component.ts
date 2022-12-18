import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../shared/cita.model';
import { UsuarioService } from '../shared/cita.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fechahora','motivo', 'idMascota','acciones'];
  dataSource: MatTableDataSource<Usuario>;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getAllUsuario();
  }

  getAllUsuario() {
    this.usuarioService.getAllCitas().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el usuario?');
    if (ok) {
      this.usuarioService.delete(id).subscribe(() => {
        this.getAllUsuario();
      });
    }
  }

}
