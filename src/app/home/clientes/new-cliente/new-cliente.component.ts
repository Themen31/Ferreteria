import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../productos/shared/cliente.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  constructor(public clienteService: ClienteService, private router:Router) { }

  ngOnInit(): void {}

  createCliente(cliente: any) {
    this.clienteService.create(cliente).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['clientes']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
