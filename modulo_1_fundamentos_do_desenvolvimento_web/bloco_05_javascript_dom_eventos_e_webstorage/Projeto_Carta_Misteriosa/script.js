let input = document.querySelector('#carta-texto');
let buttonNewLetter = document.querySelector('#criar-carta');
let cartaGerada = document.querySelector('#carta-gerada');
let estilo = ['newspaper', 'magazine1', 'magazine2'];
let tamanho = ['medium', 'big', 'reallybig'];
let rotation = ['rotateleft', 'rotateright'];
let inclination = ['skewleft', 'skewright']; 
let spanElement = document.getElementsByTagName('span');
let contador = document.querySelector('#carta-contador');

function createLetterText() {
    clearText();
    let typedText = input.value;
    let typedTextArray = typedText.split(' ');
    if (typedText.trim() === ''){
        cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
        for (let index = 0; index < typedTextArray.length; index += 1){
            let span = document.createElement('span');
            span.innerHTML += typedTextArray[index];
            cartaGerada.appendChild(span);
        }
    }
    randomClass();
    quantidade();
};

buttonNewLetter.addEventListener('click', createLetterText);

function random(arrayName) {
    let randomIndex = Math.floor(Math.random() * arrayName.length);
    return randomIndex;
};

function randomClass() {
    for (let index = 0; index < spanElement.length; index += 1){
        spanElement[index].classList.add(estilo[random(estilo)]);
        spanElement[index].classList.add(tamanho[random(tamanho)]);
        spanElement[index].classList.add(rotation[random(rotation)]);
        spanElement[index].classList.add(inclination[random(inclination)]);
    }
};

function changeClass(event) {
    for (let index = 0; index < spanElement.length; index += 1){
        let selected = event.target;
        selected.className = '';
        selected.classList.add(estilo[random(estilo)]);
        selected.classList.add(tamanho[random(tamanho)]);
        selected.classList.add(rotation[random(rotation)]);
        selected.classList.add(inclination[random(inclination)]);
    }
};

cartaGerada.addEventListener('click', changeClass);

function quantidade() {
    let arrayContador = [];
    for (let index = 0; index < spanElement.length; index += 1){
        if (spanElement[index].innerHTML.length > 0){
            arrayContador.push(spanElement[index]);
        }
    }
    contador.innerHTML = arrayContador.length;
};

function clearText() {
    while(cartaGerada.firstChild){
        cartaGerada.removeChild(cartaGerada.lastChild);
    };
};
