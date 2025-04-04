import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { ComponenteNomina, NominaBase } from '../models/nomina.model';
import { 
  ImpuestosDecorador, 
  BonificacionDecorador, 
  HorasExtrasDecorador,
  PensionDecorador,
  SaludDecorador
} from '../decorators';

@Injectable({ providedIn: 'root' })
export class NominaService {
  private empleados: Empleado[] = [];
  
  agregarEmpleado(empleado: Empleado) {
    this.empleados.push({ ...empleado, id: Date.now() });
  }

  getNominasCalculadas() {
    return this.empleados.map(emp => this.calcularNominaCompleta(emp));
  }

  private calcularNominaCompleta(empleado: Empleado) {
    let nomina: ComponenteNomina = new NominaBase(empleado.salarioBase);

    if (empleado.aplicaImpuestos) {
      nomina = new ImpuestosDecorador(nomina, 0.15);
    }

    if (empleado.bonificacion) {
      nomina = new BonificacionDecorador(nomina, empleado.bonificacion);
    }

    if (empleado.horasExtras?.horas) {
      nomina = new HorasExtrasDecorador(
        nomina, 
        empleado.horasExtras.horas, 
        empleado.horasExtras.tarifa
      );
    }

    if (empleado.aplicaPension) {
      nomina = new PensionDecorador(nomina, 0.04); // 4% pensión
    }

    if (empleado.aplicaSalud) {
      nomina = new SaludDecorador(nomina, 0.04); // 4% salud
    }

    return {
      empleado,
      total: nomina.calcularNomina(),
      descripcion: nomina.getDescripcion()
      
    };
  }
  
}