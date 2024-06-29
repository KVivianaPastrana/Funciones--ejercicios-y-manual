function calcularPorcentaje(pnota1, pnota2, pnota3) {
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    const porcentaje1 = (nota1 * 30) / 100;
    const porcentaje2 = (nota2 * 30) / 100;
    const porcentaje3 = (nota3 * 40) / 100;
    const porcentajeTotal = porcentaje1 + porcentaje2 + porcentaje3;
    return porcentajeTotal;
}

const totalPorcentaje = calcularPorcentaje(85, 90, 78);
console.log("El porcentaje total de las notas es: " + totalPorcentaje + "%");
