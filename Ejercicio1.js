import { calcularPromedio } from "./modules/moduloejer1.js";
/*enunciado analítico:

Un aprendiz recibe varias calificaciones y desea saber su rendimiento general. Se necesita
un programa que permita ingresar las notas obtenidas y calcule el promedio, además de
evaluar si el rendimiento es Alto, Medio o Bajo según rangos preestablecidos.
• Alto mayor o igual que 4.5
• Medio menor a 4.5 y mayor o igual 3.0
• Bajo < menor que 3.
Requerimientos:
• Crear una función declarada calcularPromedio() que reciba un arreglo de notas.
• Usar un ciclo para recorrer el arreglo.
• Determinar el rendimiento con condicionales.
• Retornar el promedio y el nivel de rendimiento.
Entradas solicitadas por el programa:
• Cantidad de notas.
• Cada una de las notas.
Salidas:
• Promedio final.
• Categoría de rendimiento. */




// Solicitar cantidad de notas
let cantidad = Number(prompt("Ingrese la cantidad de notas:"));

// Arreglo para guardar notas
let notas = [];

for (let i = 0; i < cantidad; i++) {
    let nota = Number(prompt(`Ingrese la nota ${i + 1}:`));
    notas.push(nota);
}

// Llamar a la función del módulo
const resultado = calcularPromedio(notas);

// Mostrar resultados
console.log("Promedio final:", resultado.promedio.toFixed(2));
console.log("Rendimiento:", resultado.rendimiento);

alert(`Promedio final: ${resultado.promedio.toFixed(2)}\nRendimiento: ${resultado.rendimiento}`);

