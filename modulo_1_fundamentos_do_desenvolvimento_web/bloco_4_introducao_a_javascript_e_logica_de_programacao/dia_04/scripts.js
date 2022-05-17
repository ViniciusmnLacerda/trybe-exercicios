//exercicio 1
function teste(palavra) {
    let pali = "";

    for (index = palavra.length; index > 0; index -= 1){
        pali += palavra.charAt(index-1);
    }

    if (pali === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(teste("arara"));

//exercicio 2 



function maiorValor (array){
    let num = 0; 
    for (let key in array) {
    
        if (array[num] < array[key]) {;
        num = key;
        }
    }

    return num; 
}

console.log(maiorValor([2,3,6,7,10,1]));

//exercicio 3

function menorValor (array){
    let num = 0;
    for (let key in array){ 
        if (array[num] > array[key]) {
            num = key;
        } 
    }

    return num;
}

console.log(menorValor([2,4,6,7,10,0,-3]));

//exercicio 4

function nomes(array){
    let maiorNome = array[0];

    for (let key of array) {
        if (maiorNome.length < key.length) {
            maiorNome = key; 
        }
    }
        return maiorNome; 
}

console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


//exercicio 5

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//exercicio 6


function soma (N){
    let soma = 0; 
    for (index = 1; index <= N; index += 1) {
        soma += index; 
    }
    return soma; 
}

console.log(soma(5));

//exercicio 7

function palavra (string1, string2) {
    let test = false; 
    if (string1.charAt(string1.length - 1)  === string2.charAt(string2.length - 1) && string1.charAt(string1.length - 2) === string2.charAt(string2.length - 2)) {
        test = true; 
    }
    return test; 
}

console.log(palavra('joaofernando', 'fernan'));

// exercicio bonus 1

function converteAlgarimosRomanos(numero) {
    let arrayRomana = numero.split("")
    let numeroArabico = 0; 

    for (let index = 0; index < arrayRomana.length; index += 1) {
      
        if (arrayRomana[index] === "I") {
            numeroArabico += 1;
        }
        if (arrayRomana[index] === "V") {
            numeroArabico += 5;
        }
        if (arrayRomana[index] === "X"){
            numeroArabico += 10;
        }
        if (arrayRomana[index] === "L"){
            numeroArabico += 50;
        }
        if (arrayRomana[index] === "C"){
            numeroArabico += 100;
        }
        if (arrayRomana[index] === "D"){
            numeroArabico += 500;
        }
        if (arrayRomana[index] === "M"){
            numeroArabico += 1000; 
        }
        if(arrayRomana[index +1] === "V" && arrayRomana[index] === "I") {
            numeroArabico -= 2;
            }
        if(arrayRomana[index +1] === "X" && arrayRomana[index] === "I") {
            numeroArabico -= 2;
        }
        if(arrayRomana[index +1] === "L" && arrayRomana[index] === "X"){
            numeroArabico -= 20;
        }
        if(arrayRomana[index +1] === "C" && arrayRomana[index] === "X"){
            numeroArabico -= 20;            
        }
        if(arrayRomana[index +1] === "D" && arrayRomana[index] === "C"){
            numeroArabico -= 200;            
        }
        if(arrayRomana[index +1] === "M" && arrayRomana[index] === "C"){
            numeroArabico -= 200; 
        }
        if (index === arrayRomana.length - 1) {
                break; 
        }
    }

    return numeroArabico;
}

console.log(converteAlgarimosRomanos("MMMMDCLXXIV"));



