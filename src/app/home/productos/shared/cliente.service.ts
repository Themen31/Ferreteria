import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente.model'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiBase:string = environment.apiBase;

  constructor(private http : HttpClient) { }

  getAllClientes(){
    return this.http.get<Cliente[]>(`${this.apiBase}/clientes`);
  }

  get(id:number) {
    return this.http.get(`${this.apiBase}/clientes/${id}`);
  }

  create(cliente: Cliente){
    return this.http.post(`${this.apiBase}/clientes`, cliente);
  }

  update(cliente: Cliente){
    return this.http.put(`${this.apiBase}/clientes`, cliente);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/clientes/${id}`);
  }
}
