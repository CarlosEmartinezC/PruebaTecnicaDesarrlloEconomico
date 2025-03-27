export interface Contrato {
        ID: number;
        Identificador: string;
        Valor: number;
        nombre_contratante: string;
        documento_contratante: string;
        nombre_contratantista: string;
        documento_contratantista: string;
        fecha_inicial: string;
        fecha_final: string;
        id: string;
}
export interface NuevoContrato {
  ID: number;
  Identificador: string;
  Valor: number;
  nombre_contratante: string;
  documento_contratante: string;
  nombre_contratantista: string;
  documento_contratantista: string;
  fecha_inicial: string;
  fecha_final: string;
}
