const Triangulo = require('../src/triangulo');

describe('Triangulo', () => {
  describe('.maiorQue', () => {
    let triangulo1, triangulo2;

    beforeAll(() => {
      triangulo1 = new Triangulo(3, 3, 3);
      triangulo2 = new Triangulo(3, 3, 4);
    });

    describe('quando for passado um triangulo maior', () => {
      it('deve retornar false', () => {
        expect(triangulo1.maiorQue(triangulo2)).toBe(false);
      });
    });

    describe('quando for passado um triangulo menor', () => {
      it('deve retornar true', () => {
        expect(triangulo2.maiorQue(triangulo1)).toBe(true);
      });
    });
  });
});
