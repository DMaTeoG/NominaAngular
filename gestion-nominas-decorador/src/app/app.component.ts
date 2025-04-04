import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoFormComponent } from './modules/empleados/empleado-form/empleado-form.component';
import { NominaService } from './core/services/nomina.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    EmpleadoFormComponent
  ],
  template: `
    <div class="container">
      <h1>Sistema de Nóminas</h1>

      <button (click)="mostrarFormulario = !mostrarFormulario" class="toggle-btn">
        {{ mostrarFormulario ? 'Cancelar' : 'Agregar Empleado' }}
      </button>

      <app-empleado-form 
        *ngIf="mostrarFormulario"
        (empleadoAgregado)="agregarEmpleado($event)">
      </app-empleado-form>

      <div class="empleados-list">
        <div *ngFor="let nomina of nominas" class="empleado-card">
          <h3>{{ nomina.empleado.nombre }} - {{ nomina.empleado.cargo }}</h3>
          <p>Salario: {{ nomina.total | currency }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .toggle-btn {
      background: #2196F3;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 20px;
    }
    .empleados-list {
      margin-top: 20px;
    }
    .empleado-card {
      background: #f5f5f5;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 4px;
    }
  `]
})
export class AppComponent implements OnInit {
  mostrarFormulario = false;
  nominas: any[] = [];

  constructor(private nominaService: NominaService) {}

  ngOnInit() {
    // Prueba con datos manuales - DESCOMENTAR PARA PRUEBAS
    this.agregarEmpleado({
      nombre: 'Empleado de Prueba',
      cargo: 'Developer',
      salarioBase: 3000,
      aplicaImpuestos: true,
      bonificacion: 500,
      horasExtras: { horas: 5, tarifa: 20 },
      aplicaPension: true,
      aplicaSalud: true
    });
  }
  agregarEmpleado(empleado: any) {
    this.nominaService.agregarEmpleado(empleado);
    this.mostrarFormulario = false;
    this.actualizarLista();
  }

  actualizarLista() {
    this.nominas = this.nominaService.getNominasCalculadas();
  }
}
