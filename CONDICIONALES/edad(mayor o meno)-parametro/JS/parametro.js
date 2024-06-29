function calcularEdades(anioAct, anioNa) {
    let edad = anioAct - anioNa;
    if (edad >= 18) {
        return "Es mayor de edad";
    } else {
        return "Es menor de edad";
    }
}

console.log(calcularEdades(2024, 2000));
console.log(calcularEdades(2024, 2016));
