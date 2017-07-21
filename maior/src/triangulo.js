const Poligono = require('./poligono');

class Triangulo extends Poligono {
  constructor(lado1, lado2, lado3) {
    super(lado1, lado2, lado3);
  }
}


module.exports = Triangulo;
