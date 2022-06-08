// parte I
//exercicio 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`; 
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(eleEscope);
  }
}
testingScope(true); 

 //exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const arrayOrdenada = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}
const arraySort = arrayOrdenada();
console.log(`Os números ${arraySort} se encontram ordenados de forma crescente`);


//exercicio 2 com metodo sort
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);

// parte II
//exercicio 1

const fatorial = number => {
  let result = 1; 
  for (let index = number; index >= 1; index -= 1) {
    result *= index; 
  }
  return result; 
}
//exercicio 1 com ternary operator 

function factorial(n) {
  return (n == 1 || n == 0) ? 1 :
  n * factorial(n - 1);
}

//exercicio 2
const longestWord = text => {
  let array = text.split(' '); 
  let bigWord = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > bigWord.length) {
      bigWord = array[index]; 
    }
  }
  return bigWord;
}

//exercicio 3
const button = document.querySelector('#button');
const contador = document.querySelector('#contador');
let clickCount = 0; 
button.addEventListener('click', () => contador.innerHTML = clickCount += 1);

//exercicio 4 -> Não entendi direito o que o exercício pede para ser feito, construí uma função que substitui uma palavra que contenha a letra X pela frase QUERO DORMIR!!. 

const changeString = string => {
  let array = string.split(' '); 
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].includes('x')){
      array[index] = 'QUERO DORMIR!!';
    }
  }
  result = array.join(' ');
  return result;
}

