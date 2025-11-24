
//Ejercicio 4:
//Temas: Condicionales · Operadores matemáticos · Funciones y modularización · Ciclos

//Enunciado analítico:
//Un comerciante necesita calcular el impuesto total de varios productos. Para cada producto
//se debe ingresar su valor y aplicar un porcentaje de impuesto específico. El programa
//procesará múltiples productos y debe acumular el total a pagar.
//Requerimientos:
//• Crear una función declarada calcularImpuestoUnitario(valor, porcentaje).
//• Crear una función expresada const procesarImpuestos = function(){} que solicite la
//cantidad de productos, pida cada valor y porcentaje, y use la función declarada.
//• Usar un ciclo para iterar.
//• Retornar el total final.
//Entradas solicitadas:
//• Cantidad de productos.
//• Valor de cada producto.
//• Porcentaje de impuesto.
//Salidas:
//• Impuesto total acumulado.


// Importar la función declarada desde el módulo correspondiente
import { calcularImpuestoUnitario } from "./modules/moduloejer4.js";

// Función expresada para procesar varios productos
export const procesarImpuestos = function() {
    const cantidad = Number(prompt("Ingrese la cantidad de productos:"));
    let totalImpuestos = 0;

    // Ciclo para iterar sobre cada producto
    for (let i = 1; i <= cantidad; i++) {
        const valor = Number(prompt(`Ingrese el valor del producto ${i}:`));
        const porcentaje = Number(prompt(`Ingrese el porcentaje de impuesto del producto ${i}:`));

        // Llamar a la función declarada
        const impuesto = calcularImpuestoUnitario(valor, porcentaje);

        // Acumular el total
        totalImpuestos += impuesto;
    }

    return totalImpuestos;
};


const total = procesarImpuestos();

console.log(`Impuesto total acumulado: $${total.toFixed(2)}`);
alert(`Impuesto total acumulado: $${total.toFixed(2)}`);

