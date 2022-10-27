const readline = require('readline-sync');

function handleFibonacci(quantity) {
  let a = 1; //último número adicionado
  let b = 1; //penultimo número adicionado

  for (let n = quantity; n >=0; n -= 1) {
    if(b) console.log(b);
    const temp = a;
    a += b;
    b = temp;
  }
  console.log(b);
  return b;
}

function main() {
  const n = readline.questionInt('Enter \'n\' value: ');

  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }
  console.log(`n: ${n}`);
  handleFibonacci(n - 2);
}

main();