import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/cita.model';
import { UsuarioService } from '../shared/cita.service';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css']
})
export class NewUsuarioComponent implements OnInit {

constructor(public usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  createUser(cita: any) {
    this.usuarioService.create(cita).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/Usuarios']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
