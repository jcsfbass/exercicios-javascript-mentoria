function fatoresPrimos(valor) {
  const resultado = [];
  let possivelFatorPrimo = 2;

  while (valor > 1) {
    if (valor % possivelFatorPrimo === 0) {
      valor /= possivelFatorPrimo;
      resultado.push(possivelFatorPrimo);
    } else possivelFatorPrimo++;
  }

  return resultado;
}
