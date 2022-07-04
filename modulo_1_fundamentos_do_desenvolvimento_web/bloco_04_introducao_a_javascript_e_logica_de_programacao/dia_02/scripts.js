let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (let index = 0; index < numbers.length ; index += 1){
    console.log(numbers[index]);
}

//2
var somaTotal= 0;
for (let index = 0; index < numbers.length ; index += 1){
    somaTotal= somaTotal + numbers[index] 
}

console.log("A soma de todos os elementos é: " + somaTotal);

//3
var somaTotal= 0;
var media; 
for (let index = 0; index < numbers.length ; index += 1){
    somaTotal = somaTotal + numbers[index] 
}
    
    media = somaTotal/(numbers.length);
    console.log("A média da soma de todos os elementos é: " + media);
    
//4 
var somaTotal= 0;
var media; 
for (let index = 0; index < numbers.length ; index += 1){
    somaTotal = somaTotal + numbers[index] 
}
    
    media = somaTotal/(numbers.length);
     if (media > 20 ){
         console.log("Valor maior que 20");
     } else {
         console.log("Valor menor ou igual a 20");
     }
    
//5

var valorReferencia = numbers[0];
var valorTestado; 


for (let index = 1; index < numbers.length ; index += 1){
    valorTestado = numbers[index]

    if (valorTestado > valorReferencia) {

        valorReferencia = numbers[index]
    }
}

console.log("o maior número na array é: " + valorReferencia);

//6

var candidatoPrimo;
var primos = [];


for (let index = 0; index < numbers.length ; index += 1){
    candidatoPrimo = numbers[index]
        if (candidatoPrimo % 2 !== 0) {
            primos.push(numbers[index])
        }
}

if (primos.length === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("os numeros primos são: " + primos);
}

//7 

var candidatoMenor = numbers[0]
var referencia; 
for (let index = 1; index < numbers.length ; index += 1){
    referencia = numbers[index]
    if (candidatoMenor > referencia){
        candidatoMenor = numbers[index]
    }
}

console.log("o menor número na array é: " + candidatoMenor);

//8

var array =[]

for (let index = 1; index <= 25; index += 1){
    array.push(index);
}

console.log("a array é: " + array);

//9 

var array2 = [];
for (let index = 0; index < array.length; index += 1){
    
    array2.push((array[index]/2))
}

console.log("a array dividida por dois é: " + array2);

bonus1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



for (let index = 1; index < numbers.length; index += 1){
    for (let index2 = 0; index2 < index; index2 += 1){
        if (numbers[index] < numbers[index2]){
            let auxiliar = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = auxiliar;
        }
    }
}

console.log("o vetor ordenado de forma crescente é: " + numbers);

// bonus2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
    for (let index2 = 0; index2 < index; index2 += 1){
        if (numbers[index] > numbers[index2]){
            let auxiliar = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = auxiliar;
        }
    }
}

console.log("o vetor ordenado de forma decrescente é: " + numbers);

bonus3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var multip = [];

for (index = 0 ; index < numbers.length; index += 1) {
    if (index +1 < numbers.length){
    multip.push(numbers[index] * numbers[index+1]);
    } else {
        multip.push(numbers[index] * 2);
    }
}

console.log("A array multip é: " + multip);
