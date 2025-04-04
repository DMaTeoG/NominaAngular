import { ComponenteNomina } from '../models/nomina.model';

export abstract class DecoradorNomina implements ComponenteNomina {
  constructor(protected componente: ComponenteNomina) {}

  calcularNomina(): number {
    return this.componente.calcularNomina();
  }

  getDescripcion(): string {
    return this.componente.getDescripcion();
  }
}