import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/home/productos/shared/mascota.model';
import { ProductoService } from 'src/app/home/productos/shared/mascota.service';
import { Producton } from '../historiaclinica.model';
import { ProductonService } from '../historiaclinica.service';


@Component({
  selector: 'app-form-historiaclinica',
  templateUrl: './form-historiaclinica.component.html',
  styleUrls: ['./form-historiaclinica.component.css']
})
export class FormProductonComponent implements OnInit {
  form: FormGroup;
  productos:Producto[];
  myControlProducto = new FormControl(null,Validators.required);
  productoFiltrados$: Observable<Producto[]>;
  producto: Producto;
  producton: Producton;
  @Output() onSave: EventEmitter<any>= new EventEmitter();
  constructor(
    private productonService: ProductonService,
    private productoService: ProductoService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }
    ngOnInit(): void {
    this.form=new FormGroup({
      numeroFicha: new FormControl('',[Validators.required ]),
      observacion: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
      diagnostico: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
      tratamiento: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
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
  
    mostrarProducto(val:Producto){
      return val ? `${val.nombre}` : val;
    }

    save(){
      let producton = new Producton();
      this.producto=this.form.value['idMascota']
      producton.idMascota=this.producto;
      producton.numeroFicha=this.form.value['numeroFicha']
      producton.observacion=this.form.value['observacion']
      producton.diagnostico=this.form.value['diagnostico']
      producton.tratamiento=this.form.value['tratamiento']
      this.onSave.emit(producton);
    }
  }
  