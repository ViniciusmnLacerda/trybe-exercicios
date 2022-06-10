function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//As funções encode e decode abaixo são as que eu fiz no projeto playground functions, eu não refatorei. 
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

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];


const searchEmployee = (id, detail) => {
  let worker = '';
  for (let index = 0; index < professionalBoard.length; index += 1) {
    if (professionalBoard[index].id === id) {
      worker = professionalBoard[index]; 
    }
  }
  if(!worker) {
    throw new Error('ID não identificada');
  }
  if (!worker[detail]) {
    throw new Error("Informação indisponível");
  }
  return worker[detail]; 
};

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee };
