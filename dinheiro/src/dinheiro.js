 class Dinheiro {
  constructor(valor) {
    this.valor = valor;
  }

  igualA(outroDinheiro) {
    return this.valor === outroDinheiro.valor;
  }

  mais(outroDinheiro) {
    return new Dinheiro(this.valor + outroDinheiro.valor);
  }
}
module.exports = Dinheiro;
