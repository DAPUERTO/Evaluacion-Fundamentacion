// Función declarada para calcular el impuesto de un producto
export function calcularImpuestoUnitario(valor, porcentaje) {
    // Validar que el porcentaje esté entre 0 y 100 (condicional opcional)
    if (porcentaje < 0 || porcentaje > 100) {
        return 0;
    }
    
    // Operación matemática: impuesto = valor × (porcentaje / 100)
    return valor * (porcentaje / 100);
}
