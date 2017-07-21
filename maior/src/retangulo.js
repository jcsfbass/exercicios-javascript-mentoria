const Poligono = require('./poligono');

class Retangulo extends Poligono {
  constructor(base, altura) {
    super(base, altura, base, altura);
  }
}

module.exports = Retangulo;
