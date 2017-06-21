const Dinheiro = require('../src/dinheiro');

describe('Dinheiro', () => {
  describe('.igualA', () => {
    describe('quando os valores forem iguais', () => {
      it('deve retornar true', () => {
        const dez = new Dinheiro(10);
        const outroDez = new Dinheiro(10);

        const resultado = dez.igualA(outroDez);

        expect(resultado).toBeTruthy();
      });
    });

    describe('quando os valores forem diferentes', () => {
      it('deve retornar false', () => {
        const dez = new Dinheiro(10);
        const vinte = new Dinheiro(20);

        const resultado = dez.igualA(vinte);

        expect(resultado).toBeFalsy();
      });
    });
  });

  describe('.mais', () => {
    it('deve somar os valores', () => {
      const dez = new Dinheiro(10);
      const vinte = new Dinheiro(20);
      const trinta = new Dinheiro(30);

      const resultado = vinte.mais(dez);

      expect(resultado).toEqual(trinta);
    });
  });
});
