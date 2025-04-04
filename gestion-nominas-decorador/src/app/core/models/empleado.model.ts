export interface Empleado {
  id?: number;
  nombre: string;
  cargo: string;
  salarioBase: number;
  aplicaImpuestos: boolean;
  aplicaPension: boolean;
  aplicaSalud: boolean;
  bonificacion: number;
  horasExtras: {
    horas: number;
    tarifa: number;
  };
}
