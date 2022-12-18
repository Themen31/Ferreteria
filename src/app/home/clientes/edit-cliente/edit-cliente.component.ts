import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../productos/shared/cliente.model';
import { ClienteService } from '../../productos/shared/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  idcliente : number;
 
  public cliente:Cliente;

  @Input() clienteEdit: Cliente = new Cliente();

  constructor(public clienteService: ClienteService,private router:Router,
    private activeRoute: ActivatedRoute,  private formBuilder: FormBuilder) { 
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.idcliente = Number(paramMap.get('id'));
        this.clienteService.get(this.idcliente).subscribe((data:any)=>{
          this.cliente=data;
          console.log(this.cliente);
        });
      })
    }

  ngOnInit(): void {
  }

  update(cliente:any){
    this.clienteService.update(cliente).subscribe(
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
    nombreCliente: new FormControl('',Validators.required),
      apellidoCliente: new FormControl('',Validators.required),
      dniCliente: new FormControl('',Validators.required),
      telefonoCliente: new FormControl('',Validators.required),
      celularCliente: new FormControl('',Validators.required),
      direccionCliente: new FormControl('',Validators.required),
      emailCliente: new FormControl('',Validators.required),
  });

  save(form: Cliente){
    form.idcliente = this.idcliente;
    this.clienteService.update(form).subscribe(()=>{
      this.router.navigate(['/clientes']);
    },(error:any)=>{

    })
  }

}
