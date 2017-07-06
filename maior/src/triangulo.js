class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.perimetro = lado1 + lado2 + lado3;
  }

  maiorQue(outroTriangulo) {
    return this.perimetro > outroTriangulo.perimetro;
  }
}


module.exports = Triangulo;
