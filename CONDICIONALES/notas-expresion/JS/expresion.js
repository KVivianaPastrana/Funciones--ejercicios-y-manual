const calcularPorcentajeNota1 = function(nota1) {
    return parseFloat((nota1 * 0.2).toFixed(2));
}

let nota1 = calcularPorcentajeNota1(8);
console.log("Porcentaje nota 1: " + nota1);

const calcularPorcentajeNota2 = function(nota2) {
    return parseFloat((nota2 * 0.35).toFixed(2));
}

let nota2 = calcularPorcentajeNota2(7);
console.log("Porcentaje nota 2: " + nota2);

const calcularPorcentajeNota3 = function(nota3) {
    return parseFloat((nota3 * 0.45).toFixed(2));
}

let nota3 = calcularPorcentajeNota3(6);
console.log("Porcentaje nota 3: " + nota3);

const sumaDeLosTresProcentajes = function(porcentaje1, porcentaje2, porcentaje3) {
    return (porcentaje1 + porcentaje2 + porcentaje3).toFixed(2);
}

let suma = sumaDeLosTresProcentajes(nota1, nota2, nota3);
console.log("Suma de los porcentajes: " + suma);

const compararNotas = function(sumaProcentajes) {
    if (sumaProcentajes >= 4.5) {
        return "La nota es superior";
    } else if (sumaProcentajes < 4.5 && sumaProcentajes >= 3.5) {
        return "La nota es buena";
    } else if (sumaProcentajes < 3.5 && sumaProcentajes >= 3) {
        return "La nota es regular";
    } else {
        return "La nota es mala";
    }
}

var mensaje = compararNotas(suma);
console.log(mensaje);
