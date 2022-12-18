import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from './cita.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllCitas() {
    return this.http.get<Usuario[]>(`${this.apiBase}/citas`);
  }

  get(id: number) {
    return this.http.get<Usuario>(`${this.apiBase}/citas/${id}`);
  }

  create(cita: Usuario) {
    return this.http.post(`${this.apiBase}/citas`, cita);
  }

  update(cita: Usuario) {
    return this.http.put(`${this.apiBase}/citas`, cita);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/citas/${id}`);
  }
}
