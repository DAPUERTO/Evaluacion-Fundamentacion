/*Ejercicio5
Temas: Arreglos · Ciclos · Condicionales · Función flecha o modularizada.

Enunciado analítico:
El usuario tendrá un conjunto de valores (números o textos) y deberá consultar si un
elemento específico existe en el arreglo. Se debe recorrer manualmente la estructura sin
usar métodos avanzados como .includes().

Requerimientos:
• Crear una función flecha buscarElemento = (lista, elemento) => {}.
• Recorrer el arreglo con un ciclo.
• Retornar true/false según si encuentra el elemento.

• Mostrar un mensaje amigable indicando si fue hallado o no.
Entradas solicitadas:
• Cantidad de elementos.
• Los elementos del arreglo.
• Elemento a buscar.
Salidas:
• Confirmación de existencia del elemento.*/


import { elementoEspecifico } from "./modules/moduloejer5.js";



let = cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos que desea agregar al arreglo:"));
let arreglo = [];
for (let i = 0; i < cantidadElementos; i++) {
    let elemento = prompt(`Ingrese el elemento ${i + 1}:`);
    arreglo.push(elemento);
}
let elementoAbuscar = prompt ("ingrese el el elemento que desea buscar en el arreglo:");

