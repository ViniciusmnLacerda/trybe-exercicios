const {
  sum,
  myRemove,
  myFizzBuzz,
} = require('./sum.js');

describe('Testes do exercício 1', () => {
  it('Teste da soma 1.1 e 1.2', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  });

  it('Teste do erro requisito 1.3 e 1.4', () => {
    expect(() => sum(4,'5')).toThrowError();
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  });
});

describe('Testes do exercício 2', () => {
  it('Testes dos requisitos 2.1, 2.2 e 2.3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Testes do exercício 3', () => {
  it('Teste do requisito 3.1, 3.2, 3.3, 3.4 e 3.5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz('15')).toBe(false);
  });
});