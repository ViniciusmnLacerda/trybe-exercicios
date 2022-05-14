//exercicio 1

let number = 10; 
let auxiliar = 1;
let fatorial = 1;


for (let index = 0; index <= number - 1; index += 2){

    auxiliar = (number - index ) * (number - index - 1);

    for (let index2 = 0; index2 < number - 1; index2 += 1) {



        if (fatorial == 1){
            fatorial = auxiliar;
            
        } else if (auxiliar < fatorial){
            fatorial = fatorial*auxiliar;

        } 
            auxiliar = number**number;

        

    }
}
console.log("O resultado do fatorial é: " + fatorial);

// exercicio 2

let word = "ola";
let inversa = "";

for (let index = 0; index < word.length; index += 1){
    inversa = inversa + word[word.length -1 - index]
}

console.log("a palavra invertida é: " + inversa);

//exercicio 3
    //primeiro programa

let array = ['java', 'javascript', 'python', 'html', 'css'];
let auxiliar = "";




for (index = 0; index < array.length; index += 1) {
    if (auxiliar.length === 0) {
        auxiliar = array[index]

    } else if (auxiliar.length < array[index].length) {
        auxiliar = array[index]
    }

}

console.log("A maior palavra é: " + auxiliar);

    //segundo programa

let array = ['java', 'javascript', 'python', 'html', 'css'];
let auxiliar = "";




for (index = 0; index < array.length; index += 1) {
    if (auxiliar.length === 0) {
        auxiliar = array[index]

    } else if (auxiliar.length > array[index].length) {
        auxiliar = array[index]
    }

}

console.log("A menor palavra é: " + auxiliar);


//exercicio 4

let maiorPrimo = 0;

for (let index = 0; index <= 50; index += 1){
    let primo = true; 
    for (let divisor = 2; divisor < index; divisor += 1)
    if (index % divisor === 0){
        primo = false;
    } 
    if (primo) {
       maiorPrimo = index; 
    }

} 
console.log("o maior primo é: " + maiorPrimo);

exercicio bonus1

let n = 7; 
let linha = ""; 
coluna = ""

for (index = 0; index < n; index += 1){
    coluna = coluna + "*"
}

for (linha = 0; linha < n; linha += 1){
console.log(coluna);
}

exercicio bonus 2

n = 5;
coluna = "";


for (linha = 0; linha < n; linha += 1) {
    coluna = coluna + "*";
    console.log(coluna);
}


//exercicio bonus 3
n = 5
coluna = ""; 

for (index = 0; index < n; index += 1){
    coluna += " " + "*"
    
    
    
    console.log(coluna);
}


