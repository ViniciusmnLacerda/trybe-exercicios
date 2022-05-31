let botaoEnviar = document.querySelector('#send');
let botaoApagar = document.querySelector('#clear');
let input = document.querySelectorAll('input');
let textArea = document.querySelector('textarea');
let botaoParticipar = document.querySelector('#enviar-dados')
let aceitarImagens = document.querySelector('#images');
let email = document.querySelector('#email');
let fullName = document.querySelector('#full-name');

function stopSubmit(event) {
    event.preventDefault();
    let testeValidation = validation();
    if (testeValidation  === false) {
        alert('Dados Inválidos');
    } else {
        alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
};

function limparFormulario() {
    for (let index = 0; index < input.length; index += 1) {
        let inputTyped = input[index];
        inputTyped.value = '';
        inputTyped.checked = false; 
    };
    textArea.value = '';
};

function enviarDados() {
    botaoParticipar.disabled = !aceitarImagens.checked;
};

window.onload = function() {
    botaoEnviar.addEventListener('click', stopSubmit);
    botaoApagar.addEventListener('click', limparFormulario);
    aceitarImagens.addEventListener('change', enviarDados);
};

function validation() {
    let emailLength = email.value.length; 
    let nameLength = fullName.value.length;
    let textLength = textArea.value.length;
    if (emailLength < 10 || emailLength > 50 || nameLength < 10 || nameLength > 40 || textLength > 500){
        return false;
    } else {
        return true; 
    };
};