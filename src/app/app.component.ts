import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataServiceService } from './data-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnica';
  
    nuevoContrato = {
      identificador: '',
      valor: 0,
      nombre_contratante: '',
      documento_contratante: '',
      nombre_contratantista: '',
      documento_contratantista: '',
      fecha_inicial: '',
      fecha_final: ''
    };

    contratos: any[] = [];
    contratoSeleccionado: any = null;
  
    constructor(private contratoService: DataServiceService) {}
  
    ngOnInit(): void {
      this.obtenerContratos();
    }
  
    // Insertar contrato
    insertarContrato(): void {
      this.contratoService.createContrato(this.nuevoContrato).subscribe(() => {
        this.obtenerContratos(); // Actualizar la lista
        this.nuevoContrato = {
          identificador: '',
          valor: 0,
          nombre_contratante: '',
          documento_contratante: '',
          nombre_contratantista: '',
          documento_contratantista: '',
          fecha_inicial: '',
          fecha_final: ''
        };
      });
    }
  
    // Obtener todos los contratos
    obtenerContratos(): void {
      this.contratoService.getAllContratos().subscribe((data) => {
        this.contratos = data;
      });
    }
  
    // Obtener un contrato por ID
    obtenerContrato(id: number): void {
      this.contratoService.getContratoById(id).subscribe((data) => {
        this.contratoSeleccionado = data;
      });
    }

}
