const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função retorna undefined quando nao é passado nenhum parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testa se a função retorna Parâmetro inválido, é necessário uma string quando nao é passada uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se a função retorna 5 quando param = popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa se a função retorna a media de idade correta dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se a função retorna 4 quando param = count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se a função retorna corretamente o nome dos elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Testa se a função retorna null para uma chave inexistente', () => {
    expect(handlerElephants('Vinícius Lacerda')).toEqual(null);
  });
});
