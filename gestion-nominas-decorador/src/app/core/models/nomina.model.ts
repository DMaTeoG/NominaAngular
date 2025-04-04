export interface ComponenteNomina {
  calcularNomina(): number;
  getDescripcion(): string;
}
export class NominaBase implements ComponenteNomina {
  constructor(private salarioBase: number) {}

  calcularNomina(): number {
    return this.salarioBase;
  }

  getDescripcion(): string {
    return `Salario base (${this.salarioBase})`;
  }
}