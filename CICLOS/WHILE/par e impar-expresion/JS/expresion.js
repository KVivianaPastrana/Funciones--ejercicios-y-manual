const  paroImpar = function(pcontar, numero) {
  let contar = pcontar;
  while (contar <= numero) {
    if (contar % 2 === 0) {
      console.log(contar + " es par");
    } else {
      console.log(contar + " es impar");
    }
    contar++;
  }
}

paroImpar(0, 5);
