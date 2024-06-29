const tablaNueve = function(pnumero, prango) {
    let numero = pnumero;
    let rango = prango;
    let i = 1;
    while (i <= rango) {
      let multiplicacion = numero * i;
      paroImpar(multiplicacion);
      i++;
    }
  }
  
const paroImpar = function(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es par");
    } else {
      console.log(numero + " es impar");
    }
  }
  
  tablaNueve(9, 5);
  