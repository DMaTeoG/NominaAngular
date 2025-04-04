import { ComponenteNomina } from '../models/nomina.model';
import { DecoradorNomina } from './base.decorator';

export class HorasExtrasDecorador extends DecoradorNomina {
  constructor(
    componente: ComponenteNomina,
    private horas: number,
    private tarifaHora: number
  ) {
    super(componente);
  }

  override calcularNomina(): number {
    return super.calcularNomina() + (this.horas * this.tarifaHora);
  }

  override getDescripcion(): string {
    return `${super.getDescripcion()} | Horas extras (${this.horas}h × $${this.tarifaHora.toFixed(2)}/h)`;
  }
}