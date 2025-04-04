import { ComponenteNomina } from '../models/nomina.model';
import { DecoradorNomina } from './base.decorator';

export class PensionDecorador extends DecoradorNomina {
  constructor(
    componente: ComponenteNomina,
    private tasaPension: number
  ) {
    super(componente);
  }

  override calcularNomina(): number {
    return super.calcularNomina() * (1 - this.tasaPension);
  }

  override getDescripcion(): string {
    return `${super.getDescripcion()} | Aporte pensión (${(this.tasaPension * 100).toFixed(0)}%)`;
  }
}