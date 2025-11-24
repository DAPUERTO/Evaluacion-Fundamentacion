// Función declarada que recibe un arreglo de notas
export function calcularPromedio(notas) {
    let suma = 0;

    // Recorrer el arreglo
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calcular promedio
    const promedio = suma / notas.length;

    // Determinar rendimiento
    let rendimiento = "";

    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.0) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Retornar un objeto con los resultados
    return {
        promedio: promedio,
        rendimiento: rendimiento
    };
}
