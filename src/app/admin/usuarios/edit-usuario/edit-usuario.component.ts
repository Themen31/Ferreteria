import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/home/productos/shared/mascota.model';
import { ProductoService } from 'src/app/home/productos/shared/mascota.service';
import { Usuario } from '../shared/cita.model';
import { UsuarioService } from '../shared/cita.service';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  id : number;
  idMascota : number;
  public cita:Usuario;
  public mascota: Producto;
  dataSource:Usuario;

  @Input() historia: Usuario = new Usuario();

  constructor(public usuarioService: UsuarioService, private router: Router,
   private activeRoute: ActivatedRoute, public productoService: ProductoService,   private formBuilder: FormBuilder,) {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      this.usuarioService.get(this.id).subscribe((data:any)=>{
        this.cita=data;
        console.log(this.cita);
      });
      this.activeRoute.paramMap.subscribe((paramMap) => {
        this.idMascota = Number(paramMap.get('id'));
        this.productoService.get(this.idMascota).subscribe((data: any) => {
          this.mascota=this.cita.idMascota;
          console.log(this.mascota);
        });
      });
   })
  }
getCita(){
  const params=this.activeRoute.snapshot.params;
  console.log('para', params['id']);
  this.usuarioService.get(params['id']).subscribe(
    (data:any)=>{
      this.dataSource=data;
      console.log('parapara', data);

  })

}
  ngOnInit(): void {
    this.getCita()
  }

  update(cita: any) {
    this.usuarioService.update(cita).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/Usuarios']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  form=new FormGroup({
    fechahora: new FormControl('',[Validators.required ]),
    motivo: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
  });



  save(form: Usuario) {
    form.id = this.id;
    form.idMascota = this.mascota;
    this.usuarioService.update(form).subscribe(()=>{
      this.router.navigate(['/admin/Usuarios']);
    }, (error: any) => {

    })
  }
}

