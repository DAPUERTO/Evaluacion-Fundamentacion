//enunciado analítico:
//Un aprendiz recibe varias calificaciones y desea saber su rendimiento general. Se necesita
//un programa que permita ingresar las notas obtenidas y calcule el promedio, además de
//evaluar si el rendimiento es Alto, Medio o Bajo según rangos preestablecidos.
//• Alto mayor o igual que 4.5
//• Medio menor a 4.5 y mayor o igual 3.0
//• Bajo < menor que 3.
//Requerimientos:
//• Crear una función declarada calcularPromedio() que reciba un arreglo de notas.
//• Usar un ciclo para recorrer el arreglo.
//• Determinar el rendimiento con condicionales.
//• Retornar el promedio y el nivel de rendimiento.
//Entradas solicitadas por el programa:
//• Cantidad de notas.
//• Cada una de las notas.
//Salidas:
//• Promedio final.
//• Categoría de rendimiento.


// Función declarada que calcula el promedio y el rendimiento
function calcularPromedio(notas) {
    let suma = 0;

    //Recorre el arreglo de notas
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calcular promedio
    let promedio = suma / notas.length;

    // Determinar rendimiento
    let rendimiento = "";

    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Retornar resultado como objeto
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}



// Solicitar cantidad de notas
let cantidad = parseInt(prompt("Ingrese la cantidad de notas:"));

// Crear arreglo para almacenar notas
let notas = [];

for (let i = 0; i < cantidad; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    notas.push(nota);
}

// Llamar la función
let resultado = calcularPromedio(notas);

// Mostrar resultados
console.log("Promedio final:", resultado.promedio.toFixed(2));
console.log("Rendimiento:", resultado.rendimiento);

alert(`Promedio final: ${resultado.promedio.toFixed(2)}\nRendimiento: ${resultado.rendimiento}`);

