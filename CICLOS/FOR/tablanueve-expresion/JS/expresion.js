const  tablaNueve = function(pnumero, prango) {
    let numero = pnumero;
    let rango = prango;
    for (let i = 1; i <= rango; i++) {
      let multiplicacion = numero * i;
      paroImpar(multiplicacion);
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
  