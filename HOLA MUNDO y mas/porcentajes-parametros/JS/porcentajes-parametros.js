function calcularPorcentaje(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let multiplicacion = num1 * num2;
    let porcentaje = multiplicacion / 100;
    return porcentaje;
}

let resultados = calcularPorcentaje(3, 4);
console.log("El resultado de los porcentajes es el siguiente: " + resultados);
