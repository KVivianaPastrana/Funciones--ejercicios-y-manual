const  multiplicar = function (pcontar2, pnumero1) {
    let contar2 = pcontar2;
    let numero1 = pnumero1;
    while (contar2 <= numero1) {
      let multiplicar = numero1 * contar2;
      console.log(multiplicar);
      contar2++;
    }
  }
  
  multiplicar(1, 5);
  