// Desafio 1 RESOLVIDO
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2 RESOLVIDO
function calcArea(B, H) {
  let area = ((B * H) / 2);
  return area;
}

// Desafio 3 RESOLVIDO
function splitSentence(string) {
  let array = [];
  array = string.split(' ');
  return array;
}

// Desafio 4 RESOLVIDO
function concatName(arrayDeNomes) {
  let nomes = arrayDeNomes[arrayDeNomes.length - 1] + ', ' + arrayDeNomes[0];
  return nomes;
}

// Desafio 5 RESOLVIDO
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6 RESOLVIDO
function highestCount(arrayDeNumeros) {
  let maiorNumero = arrayDeNumeros[0];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] > maiorNumero) {
      maiorNumero = arrayDeNumeros[index];
    }
  }
  let repeticoes = 0;
  for (let index2 = 0; index2 < arrayDeNumeros.length; index2 += 1) {
    if (arrayDeNumeros[index2] === maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7 RESOLVIDO
function catAndMouse(mouse, cat1, cat2) {
  let d1 = (mouse - cat1);
  let d2 = (mouse - cat2);
  if (d1 < 0) {
    d1 *= (-1);
  }
  if (d2 < 0) {
    d2 *= (-1);
  }
  if (d1 < d2) {
    return 'cat1';
  }
  if (d2 < d1) {
    return 'cat2';
  }
  if (d1 === d2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 RESOLVIDO
function fizzBuzz(arrayDeNumeros) {
  let resultado = [];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] % 3 === 0 && arrayDeNumeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    }
    if (arrayDeNumeros[index] % 3 === 0 && arrayDeNumeros[index] % 5 !== 0) {
      resultado.push('fizz');
    }
    if (arrayDeNumeros[index] % 5 === 0 && arrayDeNumeros[index] % 3 !== 0) {
      resultado.push('buzz');
    }
    if (arrayDeNumeros[index] % 3 != 0 && arrayDeNumeros[index] % 5 !== 0) {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9 RESOLVIDO
function encode(encodeX) {
  let arrayEncode = encodeX.split('');
  for (let index = 0; index < arrayEncode.length; index += 1) {
    if (arrayEncode[index] === 'a') {
      arrayEncode[index] = 1;
    } else if (arrayEncode[index] === 'e') {
      arrayEncode[index] = 2;
    } else if (arrayEncode[index] === 'i') {
      arrayEncode[index] = 3;
    } else if (arrayEncode[index] === 'o') {
      arrayEncode[index] = 4;
    } else if (arrayEncode[index] === 'u') {
      arrayEncode[index] = 5;
    }
  }
  let stringEncode = arrayEncode.join('');
  return stringEncode;
}

function decode(decodeX) {
  let arrayDecode = decodeX.split('');
  for (let index = 0; index < arrayDecode.length; index += 1) {
    if (arrayDecode[index] === '1') {
      arrayDecode[index] = 'a';
    } else if (arrayDecode[index] === '2') {
      arrayDecode[index] = 'e';
    } else if (arrayDecode[index] === '3') {
      arrayDecode[index] = 'i';
    } else if (arrayDecode[index] === '4') {
      arrayDecode[index] = 'o';
    } else if (arrayDecode[index] === '5') {
      arrayDecode[index] = 'u';
    }
  }
  let stringDecode = arrayDecode.join('');
  return stringDecode;
}

// Desafio 10 RESOLVIDO
function techList(arrayTech, string) {
  let arrayDeObjetos = [];
  let arrayTechOrdenada = arrayTech.sort();
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayTechOrdenada.length; index += 1) {
    arrayDeObjetos.push({ tech: arrayTechOrdenada[index], name: string });
  }
  return arrayDeObjetos;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
