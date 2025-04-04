import { ComponenteNomina } from '../models/nomina.model';
import { DecoradorNomina } from './base.decorator';

export class SaludDecorador extends DecoradorNomina {
  constructor(
    componente: ComponenteNomina,
    private tasaSalud: number
  ) {
    super(componente);
  }

  override calcularNomina(): number {
    return super.calcularNomina() * (1 - this.tasaSalud);
  }

  override getDescripcion(): string {
    return `${super.getDescripcion()} | Aporte salud (${(this.tasaSalud * 100).toFixed(0)}%)`;
  }
}