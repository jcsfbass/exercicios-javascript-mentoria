const Retangulo = require('../src/retangulo');

describe('Retangulo', () => {
  describe('maiorQue', () => {
    let retangulo1,retangulo2;

    beforeAll(() => {
      retangulo1 = new Retangulo(2, 2);
      retangulo2 = new Retangulo(3, 3);
    });

    describe('quando for passado um retangulo maior', () => {
      it('deve retornar false', () => {
        expect(retangulo1.maiorQue(retangulo2)).toBe(false);
      });
    });

    describe('quando for passado um retangulo menor', () => {
      it('deve retornar true', () => {
        expect(retangulo2.maiorQue(retangulo1)).toBe(true);
      });
    });
  });
});
