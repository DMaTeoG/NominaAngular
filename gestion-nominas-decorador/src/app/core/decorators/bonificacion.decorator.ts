import { ComponenteNomina } from '../models/nomina.model';
import { DecoradorNomina } from './base.decorator';

export class BonificacionDecorador extends DecoradorNomina {
  constructor(
    componente: ComponenteNomina,
    private montoBonificacion: number
  ) {
    super(componente);
  }

  override calcularNomina(): number {  // <-- Añade 'override'
    return super.calcularNomina() + this.montoBonificacion;
  }

  override getDescripcion(): string {  // <-- Añade 'override'
    return `${super.getDescripcion()} | Bonificación (+$${this.montoBonificacion})`;
  }
}