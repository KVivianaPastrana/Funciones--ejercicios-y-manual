function salario(vdia, dias) {
    let totalSalario = vdia * dias;
    return totalSalario;
}

function salud(vdia, dias) {
    let pagoSalud = salario(vdia, dias) * 0.12;
    return pagoSalud;
}

function pension(vdia, dias) {
    let pagoPension = salario(vdia, dias) * 0.16;
    return pagoPension;
}

function arl(vdia, dias) {
    let pagoAr1 = salario(vdia, dias) * 0.052;
    return pagoAr1;
}

function descuento(vdia, dias) {
    let pagoDescuento = salud(vdia, dias) + pension(vdia, dias) + arl(vdia, dias);
    return pagoDescuento;
}

function pagoTotal(vdia, dias) {
    let pagoSueldo = salario(vdia, dias) - descuento(vdia, dias);
    return pagoSueldo;
}

let pvdia = 100000; 
let pdias = 20;

let totalSalario = salario(pvdia, pdias);
let pagoSalud = salud(pvdia, pdias);
let pagoPension = pension(pvdia, pdias);
let pagoArl = arl(pvdia, pdias);
let totalDescuento = descuento(pvdia, pdias);
let sueldoFinal = pagoTotal(pvdia, pdias);

console.log("El salario de la persona es de: $" + totalSalario);
console.log("El pago de salud es de: $" + pagoSalud);
console.log("El pago de pensión es de: $" + pagoPension);
console.log("El pago de ARL es de: $" + pagoArl);
console.log("El total de descuentos es de: $" + totalDescuento);
console.log("El sueldo final después de descuentos es de: $" + sueldoFinal);