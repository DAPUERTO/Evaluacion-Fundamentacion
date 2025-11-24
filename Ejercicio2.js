import { validarAcceso } from "./modules/moduloejer2.js";

// Ejercicio 2:
// Temas: Operadores lógicos · Condicionales · Función expresada.
//
// Validador simple:
// - Permite acceso sólo si el usuario es mayor de edad (>= 18)
//   y si la contraseña ingresada coincide exactamente con la esperada.





// Entradas solicitadas
const edad = Number(prompt("Ingrese su edad:"));
const passwordIngresada = prompt("Digite su contraseña:");

// Contraseña válida definida por el sistema
const passwordCorrecta = "12345"; 

// Llamar a la función del módulo
const mensaje = validarAcceso(edad, passwordIngresada, passwordCorrecta);

// Mostrar salida
console.log(mensaje);
alert(mensaje);

