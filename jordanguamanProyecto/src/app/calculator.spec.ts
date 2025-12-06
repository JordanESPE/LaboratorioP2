import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });
  
  describe('Test for multiply', () => {
    it('multiply two numbers', () => {
      expect(calculator.multiply(3, 5)).toEqual(15);
      expect(calculator.multiply(2, 4)).toEqual(8);
    });
  });

  describe('Jasmine Matchers', () => {
    it('test of matchers', () => {
      let username = 'Jordan';
      let username2;
      
      expect(username).toBeDefined();
      expect(username2).toBeUndefined();
      
      expect(2 + 2 === 4).toBeTruthy();
      expect(1 + 1 === 3).toBeFalsy();
      
      expect(calculator.multiply(3, 4)).toBeGreaterThan(10);
      expect(calculator.divide(10, 5)).toBeLessThan(5);
      
      expect('texto de prueba').toMatch(/prueba/);
      expect(['manzana', 'naranja', 'pera']).toContain('naranja');
    });
  });

  describe('Test for divide', () => {
    it('divide for a number', () => {
      expect(calculator.divide(10, 2)).toEqual(5);
      expect(calculator.divide(15, 3)).toEqual(5);
    });

    it('divide for zero', () => {
      expect(calculator.divide(8, 0)).toBeNull();
      expect(calculator.divide(12, 0)).toBeNull();
    });
  });
});
