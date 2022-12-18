import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/home/productos/shared/cliente.model';
import { ClienteService } from 'src/app/home/productos/shared/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  form: FormGroup;
  cliente: Cliente;
  @Output() onSave: EventEmitter<any>= new EventEmitter();
  constructor(
    private clienteService: ClienteService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }
  
  
    ngOnInit(): void {
      this.form=new FormGroup({
        nombreCliente: new FormControl('',Validators.required),
        apellidoCliente: new FormControl('',Validators.required),
        dniCliente: new FormControl('',Validators.required),
        telefonoCliente: new FormControl('',Validators.required),
        celularCliente: new FormControl('',Validators.required),
        direccionCliente: new FormControl('',Validators.required),
        emailCliente: new FormControl('',Validators.required),
      });
    }
    
    save(){
      let cliente = new Cliente();
      
      cliente.nombreCliente=this.form.value['nombreCliente']
      cliente.apellidoCliente=this.form.value['apellidoCliente']
      cliente.dniCliente=this.form.value['dniCliente']
      cliente.telefonoCliente=this.form.value['telefonoCliente']
      cliente.celularCliente=this.form.value['celularCliente']
      cliente.direccionCliente=this.form.value['direccionCliente']
      cliente.emailCliente=this.form.value['emailCliente']
      console.log(cliente);
      this.onSave.emit(cliente);
    }

}
