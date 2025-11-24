//Ejercicio 3:
//Temas: Control de flujos (ciclos) · Operadores matemáticos · Función flecha.

//Enunciado analítico:
//Se necesita generar la tabla de multiplicar de un número ingresado por el usuario. El
//programa debe mostrar resultados del 1 al 10. Este ejercicio permite evaluar el manejo de
//ciclos y operaciones matemáticas.

//Requerimientos:
//• Crear una función flecha generarTabla = (numero) => {}.
//• Usar un ciclo for.
//• Retornar o mostrar los resultados en un arreglo.
//Entradas solicitadas:
//• Número base de la tabla.
//Salidas:
//• Arreglo con los resultados 1×n hasta 10×n.

// Importar la función desde el módulo
import { generarTabla } from "./modules/moduloejer3.js";

// Entrada solicitada
const numero = Number(prompt("Ingrese un número para generar su tabla de multiplicar:"));

// Llamar a la función flecha
const tabla = generarTabla(numero);

// Mostrar resultados
console.log("Tabla de multiplicar:");
console.log(tabla);

alert("Tabla generada:\n" + tabla.join("\n"));
