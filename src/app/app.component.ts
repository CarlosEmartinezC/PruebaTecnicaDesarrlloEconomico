import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataServiceService } from './data-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contrato, NuevoContrato } from './Interfaces/data-interface';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnica';
  nuevoContrato: NuevoContrato = {
      ID: 0,
      Identificador: '',
      Valor: 0,
      nombre_contratante: '',
      documento_contratante: '',
      nombre_contratantista: '',
      documento_contratantista: '',
      fecha_inicial: '',
      fecha_final: '',
    };

    contratos: Contrato[] = [];
  contratoSeleccionado: NuevoContrato = {
      ID: 0,
      Identificador: '',
      Valor: 0,
      nombre_contratante: '',
      documento_contratante: '',
      nombre_contratantista: '',
      documento_contratantista: '',
      fecha_inicial: '',
      fecha_final: '',
    }

    constructor(private contratoService: DataServiceService) {}

    ngOnInit(): void {
      this.obtenerContratos();
    }

    // Insertar contrato
  insertarContrato(): void {
    this.contratoService.getAllContratos().subscribe({
      next: (contratos: Contrato[]) => {
        let ultimoId = 0;
        if (contratos.length > 0) {
          ultimoId = Math.max(...contratos.map(c => Number(c.ID))); // Encuentra el mayor Id
        }

        // Asigna el nuevo Id al contrato
        this.nuevoContrato.ID = ultimoId + 1;

        // Crear el nuevo contrato
        this.contratoService.createContrato(this.nuevoContrato).subscribe((response: any) => {
          // Sincronizar `Id` con el `id` generado por JSON Server
          this.nuevoContrato.ID = response.iD;
          this.obtenerContratos(); // Actualiza la lista de contratos
          this.nuevoContrato = {
            ID: 0,
            Identificador: '',
            Valor: 0,
            nombre_contratante: '',
            documento_contratante: '',
            nombre_contratantista: '',
            documento_contratantista: '',
            fecha_inicial: '',
            fecha_final: ''
          };
        });
      },
      error: (err) => {
        console.error('Error al obtener contratos:', err);
      }
    });
  }




    // Obtener todos los contratos
    obtenerContratos(): void {
      this.contratoService.getAllContratos().subscribe((data) => {
        this.contratos = data;
      });
    }

    // Obtener un contrato por ID
    obtenerContrato(id: string): void {
      this.contratoService.getContratoById(id).subscribe((data) => {
        this.contratoSeleccionado = data;
      });
    }

}
