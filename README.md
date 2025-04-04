# **Gestor de Nómina en Angular**

## **Descripción**
**Gestor de Nómina** es una aplicación web desarrollada en **Angular** que ayuda a los empresarios a gestionar de manera eficiente las nóminas de sus empleados. Permite automatizar y simplificar tareas relacionadas con los pagos, cálculos de impuestos, bonificaciones, horas extras y otros beneficios, mejorando la productividad y precisión en el manejo de las nóminas.

## **Requisitos**
- **Node.js** (versión 14.x o superior)
- **Angular CLI** (versión 12.x o superior)

## **Instalación**

### 1. Clonar el repositorio
Primero, clona el repositorio en tu máquina local:
Patrón Decorador
Este proyecto utiliza el Patrón de Diseño Decorador para extender la funcionalidad de la clase NominaBase. Los decoradores se utilizan para modificar el cálculo de la nómina de un empleado añadiendo impuestos, bonificaciones, horas extras, pensión y salud. Cada decorador puede modificar la nómina base sin alterar el código original de la clase.

Dónde se utiliza el patrón Decorador
En el archivo nomina.service.ts, se usan decoradores como ImpuestosDecorador, BonificacionDecorador, HorasExtrasDecorador, PensionDecorador y SaludDecorador para añadir comportamientos específicos a la nómina de un empleado.

Ejemplo de uso en NominaService:

typescript
```bash
if (empleado.aplicaImpuestos) {
  nomina = new ImpuestosDecorador(nomina, 0.15);  // 15% de impuestos
}

if (empleado.bonificacion) {
  nomina = new BonificacionDecorador(nomina, empleado.bonificacion);
}

if (empleado.horasExtras?.horas) {
  nomina = new HorasExtrasDecorador(nomina, empleado.horasExtras.horas, empleado.horasExtras.tarifa);
}

if (empleado.aplicaPension) {
  nomina = new PensionDecorador(nomina, 0.04); // 4% pensión
}

if (empleado.aplicaSalud) {
  nomina = new SaludDecorador(nomina, 0.04); // 4% salud
}
¿Qué hace cada decorador?
Impuestos: Aplica un porcentaje de impuestos sobre el salario base.

Bonificación: Añade una bonificación sobre el salario base.

Horas Extras: Calcula el valor de las horas extras trabajadas y lo añade al salario.

Pensión: Aplica un porcentaje de pensión sobre el salario base.

Salud: Aplica un porcentaje para salud sobre el salario base.

Pruebas
```bash
git clone https://github.com/DMaTeoG/NominaAngular.git
cd gestor-nomina
npm install
ng serve
Estructura del Proyecto
