let botaoEnviar = document.querySelector('#send');
let botaoApagar = document.querySelector('#clear');
let input = document.querySelectorAll('input');
let textArea = document.querySelector('textarea');

function stopSubmit(event) {
    event.preventDefault();
};

window.onload = function() {
    botaoEnviar.addEventListener('click', stopSubmit);
    botaoApagar.addEventListener('click', limparFormulario);
};

function limparFormulario() {
    for (let index = 0; index < input.length; index += 1) {
        let inputTyped = input[index];
        inputTyped = '';
        inputTyped.checked = false; 
    };
    textArea.value = '';
};

