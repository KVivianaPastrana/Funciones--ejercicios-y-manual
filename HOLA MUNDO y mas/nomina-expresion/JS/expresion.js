let  salario= function(dias, vdia) {
    return dias * vdia;
}

const salud = function (dias, vdia) {
    let pagoSalud = salario(dias, vdia) * 0.12;
    return pagoSalud;
}

const pension = function(dias, vdia) {
    let pagoPension = salario(dias, vdia) * 0.16;
    return pagoPension;
}

const  arl = function(dias, vdia) {
    let  pagoAr1 = salario(dias, vdia) * 0.052;
    return pagoAr1;
}

const descuento = function (dias, vdia) {
    let  pagoDescuento = salud(dias, vdia) + pension(dias, vdia) + arl(dias, vdia);
    return pagoDescuento;
}

const pagoTotal  = function(dias, vdia) {
    let  pagoSueldo = salario(dias, vdia) - descuento(dias, vdia);
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