class Dinheiro {
  constructor(valor) {
    this.valor = valor;
  }

  igualA(outroDinheiro) {
    return this.valor === outroDinheiro.valor;
  }
}

module.exports = Dinheiro;
