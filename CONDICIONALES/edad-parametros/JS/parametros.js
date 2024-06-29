function calcularEdad(edad) {
    if (edad >= 18) {
        return "Es mayor de edad";
    } else {
        return "Es menor de edad";
    }
}

const resultado1 = calcularEdad(9);
console.log(resultado1);

const resultado2 = calcularEdad(19);
console.log(resultado2);
