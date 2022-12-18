import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../shared/mascota.model';
import { ProductoService } from '../shared/mascota.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  displayedColumns: string[] = ['idMascota', 'nombre', 'especie', 'raza','sexo','edad','idcliente','cliente','acciones'];
  dataSource : MatTableDataSource<Producto>;

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.getAllProductos();
  }
  
  getAllProductos(){
    this.productoService.getAllProductos().subscribe((data:any)=>{
          this.dataSource=new MatTableDataSource(data['body']);
        });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la mascota?');
    if (ok) {
      this.productoService.delete(id).subscribe(() => {
        this.getAllProductos();
      });
    }
  }
}
