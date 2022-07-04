const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate, 
  searchEmployee,
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

describe('Testes do exercício 4', () => {
  it('Teste do requisito 4.1', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });
  it('Teste do requisito 4.2 e 4.3', () => {
    expect(encode('aeiou')).toBe('12345');
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste do requisito 4.4', () => {
    expect(encode('Vinicius')).toBe('V3n3c35s');
    expect(decode('V3n3c35s')).toBe('Vinicius');
  });
  it('Teste do requisito 4.5', () => {
    expect(encode('Lacerda').length).toEqual(7);
    expect(decode('V3n3c35s').length).toEqual(8);
  });
});


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Testes do exercícios bônus', () => {
  it('Testa se a função está declarada', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se a função funciona declarando uma id e firstname', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });
  it('Testa se a função funciona declarando uma id e lastname', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
  });
  it('Testa se a função funciona declarando uma id e specialities', () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  it('Testa quando é colocada uma ID não identificada', () => {
    expect(() => {searchEmployee('8565-6','lastName')}).toThrowError(new Error('ID não identificada'));
  });
  it('Testa quando é colocada uma informação indisponível', () => {
    expect(() => {searchEmployee('1256-4','idade')}).toThrowError(new Error('Informação indisponível'));
  });
});