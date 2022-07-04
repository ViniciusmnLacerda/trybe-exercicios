const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa o funcionamento da função quando nenhum parâmetro é passado', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Testa o retorno da função quando o Zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa o retorno da função quando o Zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa o retorno da função quando o Zoo está aberto', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa quando é passado um dia da semana em português', () => {
    expect(() => getOpeningHours('sexta-feira', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa quando a abreviação é passada de forma errada', () => {
    expect(() => getOpeningHours('Wednesday', '09:00')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa quando a abreviação é passada de forma errada', () => {
    expect(() => getOpeningHours('friday', 'V5:00-AM')).toThrow('The hour should represent a number');
  });
  it('Testa quando os minutos são passados de forma errada', () => {
    expect(() => getOpeningHours('friday', '09:65-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Testa quando as horas são passadas de forma errada', () => {
    expect(() => getOpeningHours('friday', '14:00-AM')).toThrow('The hour must be between 0 and 12');
  });
});
