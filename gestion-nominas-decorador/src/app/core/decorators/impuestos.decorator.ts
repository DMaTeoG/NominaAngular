import { ComponenteNomina } from '../models/nomina.model';
import { DecoradorNomina } from './base.decorator';

export class ImpuestosDecorador extends DecoradorNomina {
  constructor(
    componente: ComponenteNomina,
    private tasaImpuestos: number
  ) {
    super(componente);
  }

  override calcularNomina(): number {
    const salario = super.calcularNomina();
    return salario * (1 - this.tasaImpuestos);
  }

  override getDescripcion(): string {
    return `${super.getDescripcion()} | Impuestos (${(this.tasaImpuestos * 100).toFixed(0)}%)`;
  }
}