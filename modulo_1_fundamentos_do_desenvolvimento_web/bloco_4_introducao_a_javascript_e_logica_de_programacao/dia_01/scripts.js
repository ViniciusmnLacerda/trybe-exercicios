var a = 7; 
var b = 5; 


//primeiro programa//
console.log("soma: " + (a+b));
console.log("subtração: " + (a-b));
console.log("multiplicação: " + (a*b));
console.log("divisão: " + (a/b));
console.log("módulo: " + (a%b));

//segundo programa// 

if (a > b){
    
    console.log("O maior do dois números é o 'a'.");
} else {
    console.log("O maior dos dois número é o 'b'.");
}

//terceiro programa// 
var c = 12; 

if (a > b && a > c){
    console.log("O maior dos três número é o 'a'.");
}

else if (b > a && b > c){
    console.log("O maior dos três número é o 'b'.");
} else {
    console.log("O maior dos três número é o 'c'.");
}

//quarto programa// 
var d = -10; 

if (d > 0) {
    console.log("positive");
} else if (d < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//quinto programa //
var e = 50; 
var f = 50; 
var g = 80; 

if (e + f + g === 180) {
    console.log(true);
} else {
    console.log(false);
}

//sexto programa// 

var piece = "Rainha"

switch (piece.toLowerCase()){
    case "peao":
        console.log("Uma casa para frente.");
        break;
    
    case "torre":
        console.log("Quantas casas quiser na horizontal ou vertical");
        break;

    case "bispo":
        console.log("Quantas casas quiser na diagonal");
        break;
    
    case "cavalo":
        console.log("Anda em L");
        break;

    case "rainha":
        console.log("Quantas casas quiser em qualquer direção");
        break;

    case "rei":
        console.log("Uma casa em qualquer direção");
        break;
}

//setimo programa//

var nota = 56; 

if (nota < 0 || nota > 100) {
    console.log("erro");
} else if (nota >= 90){
    console.log("A");
} else if (nota >= 80){
    console.log("B");
} else if (nota >= 70){
    console.log("C");
} else if (nota >= 60){
    console.log("D");
} else if (nota >= 50){
    console.log("E");
} else {
    console.log("F");
}

//oitavo programa// 

if (a%2 === 0 || b%2 === 0 || c%2 === 0){
    console.log(true);
} else {
    console.log(false);
}

//nono programa// 

if (a%2 !== 0 || b%2 !== 0 || c%2 !== 0){
    console.log(true);
} else {
    console.log(false);
}

//decimo programa//

var custo = 50; 
var venda = 90; 
var imposto = custo*(20/100)
var lucro = 1000*(venda - (custo + imposto))

console.log("Seu lucro é de " + lucro + " reais");

//decimo primeiro programa// 
let bruto = 3000; 
let inss;
let base; 
let ir; 
let liquido;

// primeiro de inss sem ir//
if (bruto <= 1556.94){
    inss = bruto*(8/100);
    liquido = bruto - inss;
    console.log("Seu salário líquido é R$ " + liquido);
} 
// segundo inss com segundo ir//
else if (bruto >= 1556.95 && bruto <= 2594.92){
    base = bruto*(0.91);
        if (base >= 1903.99 && base <= 2826,65){
            inss = base*(0.075) - 142.80;
            liquido = base - inss;
            console.log("Seu salário líquido é R$ " + liquido);
        }
   
}

// terceiro inss com segundo/terceiro/quarto ir // 
else if (bruto >= 2594.93 && bruto <= 5189.82){
    base = bruto*(0.89);
        if (base >= 1903.99 && base <= 2826.65){
            inss = base*(0.075) - 142.80;
            liquido = base - inss;
            console.log("Seu salário líquido é R$ " + liquido);
        }   else if (base >= 2826.66 && base <= 3751.05){
            inss = base*(0.15) - 354,80;
            liquido = base - inss;
            console.log("resultado: " + liquido);
            }    else if (base >= 3751.06 && base <= 4664.68){
                inss = base*(0.225) - 636.13;
                liquido = base - inss;
                console.log("Seu salário líquido é R$ " + liquido);
            }   
}

//terceiro inss com terceiro/quarto ir // 
else if (bruto >= 2594.93 && bruto <= 5189.82){
    base = bruto*(0.89);
        if (base >= 2826.66 && base <= 3751.05){
            inss = base*(0.15) - 354,80;
            liquido = base - inss;
            console.log("resultado: " + liquido);
        } else if (base >= 3751.06 && base <= 4664.68){
            inss = base*(0.225) - 636.13;
            liquido = base - inss;
            console.log("Seu salário líquido é R$ " + liquido);
        }
}

//quarto inss com quarto/quinto ir //

else if (bruto >= 5189.82){
    base = bruto - 570.88
            if (base >= 3751.06 && base <= 4664.68){
            inss = base*(0.225) - 636.13;
            liquido = base - inss;
            console.log("Seu salário líquido é R$ " + liquido);
        }   else if (base > 4664.68){
            inss = base*(0.275) - 869.36
            liquido = base - inss;
            console.log("Seu salário líquido é R$ " + liquido);
        }
}


