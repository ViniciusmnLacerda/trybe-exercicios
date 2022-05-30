//adicionando cores via JS
function cores (){
    let first = document.querySelector('.first');
    let second = document.querySelector('.second');
    let third = document.querySelector('.third');
    let fourth = document.querySelector('.fourth');
    first.style.backgroundColor = 'black';
    second.style.backgroundColor = randomColor();
    third.style.backgroundColor = randomColor();
    fourth.style.backgroundColor = randomColor();
}
cores ();

//4 - Adicione à página um quadro contendo 25 pixels. 
//5 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.
function createBoardFive() {
    let pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.style.width = '210px';
    for (let index = 0; index < 5; index += 1) {
        for (let index2 = 0; index2 < 5; index2 += 1) {
            let createDiv = document.createElement('div');
            createDiv.className = 'pixel';
            createDiv.style.backgroundColor = 'white';
            createDiv.style.width = '40px';
            createDiv.style.height = '40px'; 
            createDiv.style.border = 'black solid 1px';
            pixelBoard.appendChild(createDiv);
        }
    }
}
createBoardFive();

//7 - Selecione uma cor na paleta de cores e preencha os pixels no quadro.
//8 - Preencha um pixel do quadro com a cor selecionada na paleta de cores.
let colors = document.querySelectorAll('.color');
let colorPalette = document.querySelector('#color-palette');
let board = document.querySelector('#pixel-board'); 
let palette = document.getElementsByClassName('color');
board.addEventListener('click', function(event){
    let newColor;
    if (palette[0].className.includes('selected')) {
        newColor = 'black';
    }
    event.target.style.backgroundColor = 'black';
})
colorPalette.addEventListener('click', function(event){
    let selected = event.target; 
    for (let index = 0; index < colors.length; index += 1){
        colors[index].classList.remove('selected');
    }
    selected.classList.add('selected');   
    let board = document.querySelector('#pixel-board'); 
    let palette = document.getElementsByClassName('color');
    let newColor;
    board.addEventListener('click', function(event){
        for (let index = 0; index < palette.length; index += 1){
            console.log(palette[index].className);
            if (palette[index].className.includes('selected')){
                newColor = palette[index].style.backgroundColor;
            }
        }
        event.target.style.backgroundColor = newColor;
    })
});

//9 - Crie um botão que retorne a cor do quadro para a cor inicial.
let button = document.querySelector('#clear-board'); 
let pixels = document.querySelectorAll('.pixel');
button.addEventListener('click', function(){
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
    }
});

//10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
function clearBoard() {
    let pixelBoard = document.getElementById('pixel-board');
    while (pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.lastChild);
    }
};

function createBoardGeneric(number) {
    let pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.style.width = (parseInt(number)*40) + (parseInt(number)*2) + 'px';
    for (let index = 0; index < parseInt(number); index += 1) {
        for (let index2 = 0; index2 < parseInt(number); index2 += 1) {
            let createDiv = document.createElement('div');
            createDiv.className = 'pixel';
            createDiv.style.backgroundColor = 'white';
            createDiv.style.width = '40px';
            createDiv.style.height = '40px'; 
            createDiv.style.border = 'black solid 1px';
            pixelBoard.appendChild(createDiv);
        }
    }
};

function newBoard() {
    let input = document.querySelector('#board-size'); 
    let board = document.querySelector('#pixel-board'); 
    let number = parseInt(input.value); 
    if (input.value === '') {
        alert('Board inválido!')
    }   else if (number < 5) {
            clearBoard();
            createBoardFive();
            let button = document.querySelector('#clear-board'); //reativando o botão Limpar
            let pixels = document.querySelectorAll('.pixel');
            button.addEventListener('click', function(){
            for (let index = 0; index < pixels.length; index += 1) {
                pixels[index].style.backgroundColor = 'white';
            }
});
    } else if (number > 50) {
            clearBoard();
            createBoardGeneric(50);
            let button = document.querySelector('#clear-board'); //reativando o botão Limpar
            let pixels = document.querySelectorAll('.pixel');
            button.addEventListener('click', function(){
            for (let index = 0; index < pixels.length; index += 1) {
                pixels[index].style.backgroundColor = 'white';
            }
        });
    } else {
        clearBoard();
        createBoardGeneric(number);
        let button = document.querySelector('#clear-board'); //reativando o botão Limpar
        let pixels = document.querySelectorAll('.pixel');
        button.addEventListener('click', function(){
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = 'white';
        }
        }); 
    }
};

let vqv = document.querySelector('#generate-board'); 
vqv.addEventListener('click', newBoard);


//12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
function randomColor(){
    let red = parseInt(Math.floor(Math.random() * 255) - 0);
    let green = parseInt(Math.floor(Math.random() * 255) - 0); 
    let blue = parseInt(Math.floor(Math.random() * 255) - 0);
    let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
    return color;
}

function clearButton (){
    let button = document.querySelector('#clear-board'); 
    let pixels = document.querySelectorAll('.pixel');
    let pixelBoard = document.querySelector('#pixel-boarder');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
    }
}

