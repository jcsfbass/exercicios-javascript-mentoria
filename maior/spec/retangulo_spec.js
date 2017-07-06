const Retangulo = require('../src/retangulo');

describe('Retangulo', () => {
  describe('maiorQue', () => {
    describe('quando for passado um retangulo maior', () => {
      it('deve retornar false', () => {
        const retangulo1 = new Retangulo(2, 2);
        const retangulo2 = new Retangulo(3, 3);

        expect(retangulo1.maiorQue(retangulo2)).toBe(false);
      });
    });
  });
});
