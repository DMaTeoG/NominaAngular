// empleado-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Empleado } from '../../../core/models/empleado.model';

@Component({
  selector: 'app-empleado-form',
  template: `
    <form (ngSubmit)="onSubmit()" #empleadoForm="ngForm">
      <div>
        <label>Nombre:</label>
        <input type="text" [(ngModel)]="empleado.nombre" name="nombre" required>
      </div>
      
      <div>
        <label>Cargo:</label>
        <input type="text" [(ngModel)]="empleado.cargo" name="cargo" required>
      </div>
      
      <div>
        <label>Salario Base:</label>
        <input type="number" [(ngModel)]="empleado.salarioBase" name="salarioBase" required>
      </div>
      
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="empleado.aplicaImpuestos" name="aplicaImpuestos">
          Aplica Impuestos
        </label>
      </div>
      
      <div>
        <label>Bonificación:</label>
        <input type="number" [(ngModel)]="empleado.bonificacion" name="bonificacion">
      </div>
      
      <div>
        <h3>Horas Extras</h3>
        <label>Horas:</label>
        <input type="number" [(ngModel)]="empleado.horasExtras.horas" name="horasExtras">
        
        <label>Tarifa por hora:</label>
        <input type="number" [(ngModel)]="empleado.horasExtras.tarifa" name="tarifaHora">
      </div>
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="empleado.aplicaPension" name="aplicaPension">
          Aplica Pensión (4%)
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" [(ngModel)]="empleado.aplicaSalud" name="aplicaSalud">
          Aplica Salud (4%)
        </label>
      </div>
      <button type="submit" [disabled]="!empleadoForm.valid">Agregar Empleado</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 500px;
      margin: 2rem auto;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    div {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `]
})
export class EmpleadoFormComponent {
  @Output() empleadoAgregado = new EventEmitter<Empleado>();
  
  empleado: Empleado = {
    nombre: '',
    cargo: '',
    salarioBase: 0,
    aplicaImpuestos: true,
    bonificacion: 0,
    horasExtras: { horas: 0, tarifa: 0 }
  };

  onSubmit() {
    this.empleadoAgregado.emit(this.empleado);
    this.empleado = {
      nombre: '',
      cargo: '',
      salarioBase: 0,
      aplicaImpuestos: true,
      bonificacion: 0,
      horasExtras: { horas: 0, tarifa: 0 }
    };
  }
}