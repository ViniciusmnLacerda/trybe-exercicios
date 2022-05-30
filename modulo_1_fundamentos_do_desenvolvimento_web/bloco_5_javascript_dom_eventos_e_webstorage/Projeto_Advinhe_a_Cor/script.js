let body = document.querySelector('body');
let balls = document.querySelectorAll('.ball'); 
let color = document.querySelector('#rgb-color');
let answer = document.querySelector('#answer');
let container = document.querySelector('.container');
let playAgain = document.querySelector('#reset-game');
let placar = document.querySelector('#score');
let number = 0; 
sessionStorage.setItem('data', JSON.stringify(number));

function colorCircles() {
    for (let index = 0; index < balls.length; index += 1){
        balls[index].style.backgroundColor = randomColor();
    }
};
colorCircles();

function randomColor(){
    let red = parseInt(Math.floor(Math.random() * 255) - 0);
    let green = parseInt(Math.floor(Math.random() * 255) - 0); 
    let blue = parseInt(Math.floor(Math.random() * 255) - 0);
    let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
    return color;
};

function text(){
    let array = []; 
    for (let index = 0; index < balls.length; index += 1){
        array.push(balls[index].style.backgroundColor);
    }
    let randomIndex = Math.floor(Math.random() * array.length);
    let removeRGB = array[randomIndex].replace('rgb','');
    color.innerHTML = removeRGB;
};
text();

function chooseCircle (event) {
    let selected = event.target;
    var auxiliar = selected.style.backgroundColor;
    for (let index = 0; index < balls.length; index += 1){
        if (auxiliar === 'rgb' + color.innerHTML){
            answer.innerHTML = 'Acertou!';

        } else {
            answer.innerHTML = 'Errou! Tente novamente!';
        }
    }
    score();
};

function newGame() {
    colorCircles();
    text();
    answer.innerHTML = 'Escolha uma cor';
};

function score() {
    let selected = event.target;
    var auxiliar = selected.style.backgroundColor;
    if (auxiliar === 'rgb' + color.innerHTML){
        let recuperado = JSON.parse(sessionStorage.getItem('data'));
        number = recuperado + 3;
        sessionStorage.setItem('data', JSON.stringify(number)); 
    }   
    let newString = number.toString();
    placar.innerHTML = 'Pontos: ' + newString;
};

container.addEventListener('click', chooseCircle);
playAgain.addEventListener('click', newGame);