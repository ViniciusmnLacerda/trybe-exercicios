const {
  uppercase,
  getPokemonDetails,
} = require('./script.js');

describe('Teste do exercício 7', () => {
  it('Verifica se recebe a string vinicius e retorna VINICIUS', (done) => {
    uppercase('vinicius', (string) => {
      try {
        expect(string).toBe('VINICIUS');
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});

describe("Teste do exercício 9", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    const element = (pokemon) => pokemon.name === 'Dragonite'
    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails(element, callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    const element = (pokemon) => pokemon.name === 'Charmander';
    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }
    getPokemonDetails(element, callback);
  });
});


beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
