//exercicio 1
let tagH1 = document.createElement('h1'); 
document.body.appendChild(tagH1).innerText = 'Exercício 5.2 - JavaScript DOM';

//exercicio 2
let tagMain = document.createElement('main'); 
tagMain.className = 'main-content'; 
document.body.appendChild(tagMain);

//exercicio 3
let tagSection = document.createElement('section');
tagSection.className = 'center-content'; 
tagMain.appendChild(tagSection);

//exercicio 4
let tagP = document.createElement('p'); 
tagSection.appendChild(tagP).innerText = "O conteúdo do dia 02 do bloco 05 está muito difícil!"

//exercício 5
let tagSectionLeft = document.createElement('section'); 
tagSectionLeft.className = 'left-content'; 
tagMain.appendChild(tagSectionLeft);

//exercício 6 
let tagSectionRight = document.createElement('section'); 
tagSectionRight.className = 'right-content'; 
tagMain.appendChild(tagSectionRight);

//exercicio 7
let image = document.createElement('img'); 
image.className = 'small-image'; 
image.src = 'https://picsum.photos/200';
tagSectionLeft.appendChild(image);

//exercício 8
let listaNaoOrdenada = document.createElement('ul'); 
tagSectionRight.append(listaNaoOrdenada);

let numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']; 

for (let index = 0; index < numeros.length; index += 1){
    let itenList = document.createElement('li'); 
    listaNaoOrdenada.appendChild(itenList).innerText = numeros[index];
}

//exercício 9
for (let index = 0; index <= 3; index += 1){ 
    let tagH3 = document.createElement('h3'); 
    tagMain.appendChild(tagH3);
}

/////segunda parte/////

//exercicio 1
let title = document.querySelector('h1');
title.className = 'title'; 

//exercício 2
let tagsH3 = document.getElementsByTagName('h3'); 

for (let index = 0; index < 3; index += 1){
    tagsH3[index].className = 'description';
}

//exercício 3
let sectionEsquerda = document.getElementsByClassName('left-content')[0]; 
tagMain.removeChild(sectionEsquerda);

//exercício 4
let sectionDireita = document.getElementsByClassName('right-content')[0];
sectionDireita.style.marginRight = 'auto'; 

//exercicio 5
let sectionCentro = document.getElementsByClassName('center-content')[0]; 
sectionCentro.parentNode.style.backgroundColor = 'green'; 

//exercício 6
listaNaoOrdenada.lastChild.remove();
listaNaoOrdenada.lastChild.remove();
