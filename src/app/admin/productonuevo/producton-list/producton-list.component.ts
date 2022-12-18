import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producton } from '../../productonuevo/shared/historiaclinica.model';
import { ProductonService } from '../../productonuevo/shared/historiaclinica.service';

@Component({
  selector: 'app-producton-list',
  templateUrl: './producton-list.component.html',
  styleUrls: ['./producton-list.component.css']
})
export class ProductonListComponent implements OnInit {

  displayedColumns: string[] = ['idHistoriaClinica', 'numeroFicha','observacion', 'diagnostico', 'tratamiento'];
  dataSource: MatTableDataSource<Producton>;

  constructor(private productonService: ProductonService) {}

  ngOnInit(): void {
    this.getAllProducton();
  }

  getAllProducton() {
    this.productonService.getAllProducton().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la Historia Clinica?');
    if (ok) {
      this.productonService.delete(id).subscribe(() => {
        this.getAllProducton();
      });
    }
  }

}
