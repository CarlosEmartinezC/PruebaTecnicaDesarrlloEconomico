import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrato, NuevoContrato } from './Interfaces/data-interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private filePath = 'http://localhost:3000/contratos' // Ruta del archivo JSON

  constructor(private http: HttpClient) {}

  // Insertar contrato
  createContrato(contrato: NuevoContrato): Observable<object> {
    return this.http.post(this.filePath, contrato);
  }

  getAllContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.filePath); // Devuelve todo, incluyendo `id`
  }

  // Obtener un contrato por ID
  getContratoById(id: string): Observable<Contrato> {
    console.log("id antes de traer la información ", id);
    return this.http.get<Contrato>(`${this.filePath}/${id}`);
  }
}
