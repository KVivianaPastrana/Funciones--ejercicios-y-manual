function multiplicar(pcontar2, pnumero1) {
    let contar2 = pcontar2;
    while (contar2 <= pnumero1) {
      let resultado = pnumero1 * contar2;
      console.log(resultado);
      contar2++;
    }
  }
  
  multiplicar(1, 5);
  