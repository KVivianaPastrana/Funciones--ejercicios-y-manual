let anioNa;
let anioAct;

const calcularEdad = function(panioNa, panioAct) {
    anioNa = panioNa;
    anioAct = panioAct;
    let edadPersona = anioAct - anioNa;
    return edadPersona;
};

let edadPersona1 = 0;
let edadPersona2 = 0;
let edadPersona3 = 0;

const compararEdades = function(pedadPersona1, pedadPersona2, pedadPersona3) {
    if (pedadPersona1 > pedadPersona2 && pedadPersona1 > pedadPersona3) {
        return "La primera edad es la mayor.";
    } else if (pedadPersona2 > pedadPersona1 && pedadPersona2 > pedadPersona3) {
        return "La segunda edad es la mayor.";
    } else if (pedadPersona3 > pedadPersona1 && pedadPersona3 > pedadPersona2) {
        return "La tercera edad es la mayor.";
    } else {
        return "Las tres edades son iguales.";
    }
};

const promedioEdades = function(pedadPersona1, pedadPersona2, pedadPersona3) {
    return (pedadPersona1 + pedadPersona2 + pedadPersona3) / 3;
};

const promedioMayoriaEdad = function(pedadPersona1, pedadPersona2, pedadPersona3) {
    const promedio = promedioEdades(pedadPersona1, pedadPersona2, pedadPersona3);
    if (promedio > 18) {
        return "Está por encima del promedio.";
    } else {
        return "Está por debajo del promedio.";
    }
};

console.log("Edad persona 1: " + calcularEdad(2002, 2024));
console.log("Edad persona 2: " + calcularEdad(2003, 2024));
console.log("Edad persona 3: " + calcularEdad(2001, 2024));

edadPersona1 = calcularEdad(2002, 2024);
edadPersona2 = calcularEdad(2003, 2024);
edadPersona3 = calcularEdad(2001, 2024);

console.log(compararEdades(edadPersona1, edadPersona2, edadPersona3));
console.log(promedioMayoriaEdad(edadPersona1, edadPersona2, edadPersona3));
