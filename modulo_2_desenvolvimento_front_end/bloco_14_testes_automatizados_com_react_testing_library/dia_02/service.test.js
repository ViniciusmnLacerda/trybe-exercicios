const { test } = require('@jest/globals');
const service = require('./service');

test("exercício 1", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test("exercício 2", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(service.randomNumber(10, 2)).toBe(5);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
});

test("exercício 3", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  expect(service.randomNumber(10, 2, 3)).toBe(60);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10, 2, 3);
});

describe("Teste das tres funções", () => {
  test("Testando a função upperCase", () => {
    const mockUpperCase = jest.spyOn(service,"upperCase").mockImplementation(a => a.toLowerCase());
    expect(mockUpperCase("UPPERCASE")).toBe("uppercase");
    expect(service.upperCase).toHaveBeenCalledTimes(1);
    expect(service.upperCase).toHaveBeenCalledWith("UPPERCASE");
  });
  test("Testando a função firstLetter", () => {
    const mockFirstLetter = jest.spyOn(service, "firstLetter").mockImplementation(a => a.charAt(a.length - 1));
    expect(mockFirstLetter("letter")).toBe("r");
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith("letter");
  });
  test("Testando a função concat", () => {
    const mockConcat = jest.spyOn(service, "concat").mockImplementation((a, b, c) => a.concat(b, c));
    expect(mockConcat("tr", "y", "be")).toBe("trybe");
    expect(service.concat).toHaveBeenCalledTimes(1);
    expect(service.concat).toHaveBeenCalledWith("tr", "y", "be");
  })
});