import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../productos/shared/cliente.model';
import { ClienteService } from '../../productos/shared/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  displayedColumns: string[] = ['idcliente', 'nombreCliente', 'apellidoCliente', 'dniCliente','telefonoCliente','celularCliente','direccionCliente','emailCliente','acciones'];
  dataSource : MatTableDataSource<Cliente>;

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.getAllClientes();
  }
  
  getAllClientes(){
    this.clienteService.getAllClientes().subscribe((data:any)=>{
          this.dataSource=new MatTableDataSource(data['body']);
        });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el cliente?');
    if (ok) {
      this.clienteService.delete(id).subscribe(() => {
        this.getAllClientes();
      });
    }
  }

}
