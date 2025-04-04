import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Empleado } from '../../../core/models/empleado.model';

@Component({
  standalone: true,
  selector: 'app-empleado-form',
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit(empleadoForm)" #empleadoForm="ngForm">
      <div class="form-group">
        <label>Nombre:</label>
        <input type="text" [(ngModel)]="empleado.nombre" name="nombre" required>
      </div>

      <div class="form-group">
        <label>Cargo:</label>
        <input type="text" [(ngModel)]="empleado.cargo" name="cargo" required>
      </div>

      <div class="form-group">
        <label>Salario Base:</label>
        <input type="number" [(ngModel)]="empleado.salarioBase" name="salarioBase" required>
      </div>

      <div class="form-group">
        <label>Bonificación:</label>
        <input type="number" [(ngModel)]="empleado.bonificacion" name="bonificacion">
      </div>

      <div class="form-group">
        <label>Horas Extras:</label>
        <input type="number" [(ngModel)]="empleado.horasExtras.horas" name="horasExtrasHoras" placeholder="Cantidad de horas">
        <input type="number" [(ngModel)]="empleado.horasExtras.tarifa" name="horasExtrasTarifa" placeholder="Tarifa por hora">
      </div>

      <div class="form-group">
        <label><input type="checkbox" [(ngModel)]="empleado.aplicaImpuestos" name="aplicaImpuestos"> Aplica Impuestos</label>
      </div>

      <div class="form-group">
        <label><input type="checkbox" [(ngModel)]="empleado.aplicaPension" name="aplicaPension"> Aplica Pensión</label>
      </div>

      <div class="form-group">
        <label><input type="checkbox" [(ngModel)]="empleado.aplicaSalud" name="aplicaSalud"> Aplica Salud</label>
      </div>

      <button type="submit" [disabled]="!empleadoForm.valid">Agregar Empleado</button>
    </form>
  `,
  styles: [`
    form {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 4px;
      margin-top: 20px;
      max-width: 500px;
      background-color: #f9f9f9;
    }
    .form-group {
      margin-bottom: 15px;
    }
    input[type="text"],
    input[type="number"] {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
    }
    input[type="checkbox"] {
      margin-right: 8px;
    }
    button {
      padding: 10px 15px;
      background-color: green;
      color: white;
      border: none;
      border-radius: 4px;
      width: 100%;
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
    aplicaPension: true,
    aplicaSalud: true,
    bonificacion: 0,
    horasExtras: {
      horas: 0,
      tarifa: 0
    }
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.empleadoAgregado.emit({ ...this.empleado });
      form.resetForm();

      // Reset manual para propiedades booleanas
      this.empleado = {
        nombre: '',
        cargo: '',
        salarioBase: 0,
        aplicaImpuestos: true,
        aplicaPension: true,
        aplicaSalud: true,
        bonificacion: 0,
        horasExtras: {
          horas: 0,
          tarifa: 0
        }
      };
    }
  }
}
