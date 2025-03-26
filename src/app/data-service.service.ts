import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private filePath = 'nombre-del-proyecto/src/app/Interfaces/datos/data.json'; // Ruta del archivo JSON

  constructor(private http: HttpClient) {}

  // Insertar contrato - Esto solo funcionará si tienes un servidor manejando esta lógica
  createContrato(contrato: any): Observable<any> {
    // Para actualizar un archivo local, necesitas un backend que maneje la escritura al archivo JSON.
    return this.http.post(this.filePath, contrato);
  }

  // Obtener todos los contratos desde el archivo JSON
  getAllContratos(): Observable<any> {
    return this.http.get<any[]>(this.filePath);
  }

  // Obtener un contrato por ID (esto podría necesitar ajustes dependiendo de cómo esté estructurado tu archivo JSON)
  getContratoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.filePath}/${id}`);
  }
}