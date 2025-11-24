
// Función para generar la tabla de multiplicar de un número dado
export const generarTabla = (numero) => {
    const resultados = [];

    // Ciclo for del 1 al 10
    for (let i = 1; i <= 10; i++) {
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }
    // Retornar el arreglo con los resultados
    return resultados;
};
