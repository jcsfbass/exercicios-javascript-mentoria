const fatoresPrimos = require('../src/fatores_primos');

describe('Fatores Primos', () => {
  describe('quando o valor passado for 2', () => {
    it('deve ter um array com o valor 2', () => {
      expect(fatoresPrimos(2)).toEqual([2]);
    });
  });

  describe('quando o valor passado for 3', () => {
    it('deve ter um array com o valor 3', () => {
      expect(fatoresPrimos(3)).toEqual([3]);
    });
  });

  describe('quando o valor passado for 4', () => {
    it('deve ter um array com 2 valores de 2', () => {
      expect(fatoresPrimos(4)).toEqual([2, 2]);
    });
  });

  describe('quando o valor passado for complexo', () => {
    it('deve ter um array com todos os valores corretos', () => {
      expect(fatoresPrimos(560)).toEqual([2, 2, 2, 2, 5, 7]);
    });
  });
});
