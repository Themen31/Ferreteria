import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../shared/mascota.service';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {
  constructor(public productoService: ProductoService, private router:Router) { }

  ngOnInit(): void {}

  createMascota(mascota: any) {
    this.productoService.create(mascota).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['mascotas']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
