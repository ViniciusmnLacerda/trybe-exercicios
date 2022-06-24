const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(productDetails).toBeDefined();
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Máscara', 'Alcool gel'))).toBe(true)
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Máscara', 'Alcoo gel').length).toBe(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Máscara', 'Alcoo gel')[0] && typeof productDetails('Máscara', 'Alcoo gel')[1]).toBe('object')
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Máscara', 'Alcool gel')[0]).not.toEqual(productDetails('Máscara', 'Alcoo gel')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Máscara', 'Alcool gel')[0]).toHaveProperty('details.productId', 'Máscara123');
    expect(productDetails('Máscara', 'Alcool gel')[1]).toHaveProperty('details.productId', 'Alcool gel123');
  });
});
