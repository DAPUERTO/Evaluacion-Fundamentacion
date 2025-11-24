export const validarAcceso = function(edad, passwordIngresada, passwordCorrecta) {

    // Validar si es mayor de edad
    const esMayor = edad >= 18;

    // Validar si la contraseña es exactamente igual
    const contrasenaValida = passwordIngresada === passwordCorrecta;

    // Evaluar ambas condiciones con operador lógico AND
    if (esMayor && contrasenaValida) {
        return "Acceso concedido: Bienvenido al sistema.";
    } else {
        return "Acceso denegado: Edad insuficiente o contraseña incorrecta.";
    }
};


