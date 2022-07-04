// Desafio 11 RESOLVIDO
function generatePhoneNumber(numbers) {
  let phoneNumber = '(';
  let numeros = {};
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let repetido = numbers[index];
    if (!numeros[repetido]) {
      numeros[repetido] = 0;
      numeros[repetido] += 1;
    } else {
      numeros[repetido] += 1;
    }
  }
  for (let key in numeros) {
    if (numeros[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index <= 1; index += 1) {
    phoneNumber += numbers[index];
    if (index === 1) {
      phoneNumber += ') ';
    }
  }
  for (let index = 2; index <= 6; index += 1) {
    phoneNumber += numbers[index];
    if (index === 6) {
      phoneNumber += '-';
    }
  }
  for (let index = 7; index <= 10; index += 1) {
    phoneNumber += numbers[index];
  }
  return phoneNumber;
}

// Desafio 12 RESOLVIDO
function triangleCheck(a, b, c) {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    if (a > Math.abs((b - c)) && b > Math.abs((a - c)) && c > Math.abs((a - c))) {
      return true;
    }
  } else {
    return false;
  }
}

// Desafio 13 RESOLVIDO
function hydrate(string) {
  let array = string.split('');
  let agua = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '1' || array[i] === '2' || array[i] === '3' || array[i] === '4'
    || array[i] === '5' || array[i] === '6' || array[i] === '7'
    || array[i] === '8' || array[i] === '9') {
      let number = parseInt(array[i], 10);
      agua += number;
    }
  }

  if (agua === 1) {
    agua += ' copo de água';
  } else {
    agua += ' copos de água';
  }
  return agua;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
