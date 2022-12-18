import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producton } from './historiaclinica.model';

@Injectable({
  providedIn: 'root'
})
export class ProductonService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllProducton() {
    return this.http.get<Producton[]>(`${this.apiBase}/historiasClinicas`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/historiasClinicas/${id}`);
  }

  create(historiaclinica: Producton) {
    return this.http.post(`${this.apiBase}/historiasClinicas`, historiaclinica);
  }

  update(historiaclinica: Producton) {
    return this.http.put(`${this.apiBase}/historiasClinicas`, historiaclinica);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/historiasClinicas/${id}`);
  }
}
