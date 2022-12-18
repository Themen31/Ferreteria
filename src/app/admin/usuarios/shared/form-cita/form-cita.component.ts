import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/home/productos/shared/mascota.model';
import { ProductoService } from 'src/app/home/productos/shared/mascota.service';
import { Usuario } from '../cita.model';
import { UsuarioService } from '../cita.service';

@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.css']
})
export class FormUsuarioComponent implements OnInit {
  form: FormGroup;
  productos:Producto[];
  myControlProducto = new FormControl(null,Validators.required);
  productoFiltrados$: Observable<Producto[]>;
  producto: Producto;
  usuario: Usuario;
  @Output() onSave: EventEmitter<any>= new EventEmitter();
  constructor(
    private productoService: ProductoService,
    private usuarioService: UsuarioService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }
    ngOnInit(): void {
    this.form=new FormGroup({
      fechahora: new FormControl('',Validators.required),
      motivo: new FormControl('',Validators.required),
      idMascota:this.myControlProducto,
    });

    this.listarProductos();

    this.productoFiltrados$ = this.myControlProducto.valueChanges.pipe(
      map((val) => this.filtrarProductos(val))
      );
    }

    listarProductos(){
      this.productoService.getAllProductos().subscribe((data:any)=> {
        console.log(data['body']);
        this.productos=data['body'];
      });
    }

    filtrarProductos(val: any){
      if (val != null && val.idMascota>0){
        return this.productos.filter((el) =>
            el.nombre.toLowerCase().includes(val.nombre.toLowerCase())
        );
      }
      return this.productos.filter((el) =>
          el.nombre.toLowerCase().includes(val?.toLowerCase())
      );
    }

    mostrarMascota(val:Producto){
      return val ? `${val.nombre}` : val;
    }


    save(){
      let usuario = new Usuario();
      //this.mascota=this.form.value['idMascota']
      usuario.idMascota=this.form.value['idMascota']
      usuario.fechahora=this.form.value['fechahora']
      usuario.motivo=this.form.value['motivo']
      console.log(usuario);
      this.onSave.emit(usuario);
    }

  }


