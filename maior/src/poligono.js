class Poligono {
  constructor(...lados) {
    this.perimetro = lados.reduce((acumulador, lado) => acumulador + lado);
  }

  maiorQue(outroPoligono) {
    return this.perimetro > outroPoligono.perimetro;
  }
}

module.exports = Poligono;
