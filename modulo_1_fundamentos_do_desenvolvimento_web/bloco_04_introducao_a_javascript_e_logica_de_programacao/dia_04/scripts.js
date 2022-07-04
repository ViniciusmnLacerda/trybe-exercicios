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

function numerosRepetidos (array){    
    let numeros = {}
    for (index = 0; index < array.length; index += 1){
        let repetido = array[index]
       
        if (!numeros[repetido]){
            numeros[repetido] = 0;
            numeros[repetido] += 1;
        } else {
            numeros[repetido] += 1;
        }
    }

    let numeroReferencia = numeros[array[0]]; 
    let maisRepetido = ""
    for (let key in numeros) {
        let numeroTestado = numeros[key]
        if (numeroTestado > numeroReferencia) {
            maisRepetido = key; 
        } else {
            maisRepetido = array[0];
        }
    }



return maisRepetido;
}

console.log("o número mais repetido é: " + numerosRepetidos([2, 3, 2, 5, 8, 2, 3]));

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

//exercicio bonus 2

function arrayOfNumbers (array) {

    let pares = [];
    for (index = 0; index < array.length; index += 1){
        let arrayDaArray = array[index]; 

        for (index2 = 0; index2 < arrayDaArray.length; index2 += 1){
            if (arrayDaArray[index2] % 2 === 0)
            pares.push(arrayDaArray[index2])
        }
    }

    return pares; 
}

    
console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

//exercicio bonus 3

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  const cesta = {};

  for (let index = 0; index < basket.length; index += 1){
    let fruta = basket[index];  
        if (!cesta[fruta]) {
        cesta[fruta] = 0;    
        cesta[fruta] += 1;
        } else {
            cesta[fruta] += 1;
        }
 
  }
  let text = " ";
 for (let key in cesta) {

    text +=  cesta[key] + " " + key + "s, ";
 } 


let text2 = text.substr(0,text.length-2)
text2 += "."; 

console.log("Sua cesta possui: " + text2);

//exercicios bonus 4

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

let blocoDois = moradores.blocoDois; 
let zoey = blocoDois[blocoDois.length-1]



console.log("O morador do bloco 2 de nome " + zoey.nome + " " + zoey.sobrenome + " mora no " + zoey.andar + "°, " + "apartamento " + zoey.apartamento);

//exercicio bonus 5 

let blocoI = moradores.blocoUm; 
let blocoIi = moradores.blocoDois


for (let index = 0; index < blocoI.length; index += 1){
    console.log(blocoI[index].nome + " " + blocoI[index].sobrenome);
}

for (let index2 = 0; index2 < blocoIi.length; index2 += 1){
    console.log(blocoIi[index2].nome + " " + blocoIi[index2].sobrenome);
}