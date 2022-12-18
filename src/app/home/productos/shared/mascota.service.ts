import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from './mascota.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiBase:string = environment.apiBase;
  
  constructor(private http:HttpClient) { }
  
  getAllProductos(){
    return this.http.get<Producto[]>(`${this.apiBase}/mascota`);
  }

  get(id:number) {
    return this.http.get(`${this.apiBase}/mascota/${id}`);
  }

  create(mascota: Producto){
    return this.http.post(`${this.apiBase}/mascota`, mascota);
  }

  update(mascota: Producto){
    return this.http.put(`${this.apiBase}/mascota`, mascota);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/mascota/${id}`);
  }

}
