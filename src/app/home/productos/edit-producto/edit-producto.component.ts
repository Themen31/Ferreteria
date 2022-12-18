import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { Producto } from '../shared/mascota.model';
import { ProductoService } from '../shared/mascota.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {
  idMascota : number;
  idcliente : number;
  public mascota:Producto;
  public cliente:Cliente;
  @Input() mascotaEdit: Producto = new Producto();

  constructor(public productoService: ProductoService,private router:Router,
    private activeRoute: ActivatedRoute, public clienteService: ClienteService, private formBuilder: FormBuilder) { 
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.idMascota = Number(paramMap.get('id'));
        this.productoService.get(this.idMascota).subscribe((data:any)=>{
          this.mascota=data;
          console.log(this.mascota);
        });
        this.activeRoute.paramMap.subscribe((paramMap) =>{
          this.idcliente = Number(paramMap.get('id'));
          this.clienteService.get(this.idcliente).subscribe((data:any)=>{
            this.cliente=this.mascota.cliente;
            console.log(this.cliente);
          })
        })
      })
    }

  ngOnInit(): void {
  }

  update(mascota:any){
    this.productoService.update(mascota).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/mascotas'])
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  form=new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(70)]),
    especie: new FormControl('',Validators.required),
    raza: new FormControl('',Validators.required),
    sexo: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    
  });

  save(form: Producto){
    form.idMascota = this.idMascota;
    form.cliente = this.cliente;
    this.productoService.update(form).subscribe(()=>{
      this.router.navigate(['/mascotas']);
    },(error:any)=>{

    })
  }


}
