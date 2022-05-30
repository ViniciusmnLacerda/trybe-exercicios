let listaOrdenada = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
let botaoCriarTarefa = document.querySelector('#criar-tarefa');
let botaoApagarTudo = document.querySelector('#apaga-tudo');
let botaoApagarFinalizados = document.querySelector('#remover-finalizados');
let botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
let botaoMoverCima = document.querySelector('#mover-cima');
let botaoMoverBaixo = document.querySelector('#mover-baixo');
let botaoRemoverSelecionado = document.querySelector('#remover-selecionado');
let finalizados; 

function criarTarefa(){
    let textoDigitado = input.value;
    let novaLI = document.createElement('li'); 
    novaLI.innerHTML = textoDigitado; 
    listaOrdenada.appendChild(novaLI);
    input.value = '';
}; 

function cinza(event) {
    let itensDaLista = document.querySelectorAll('li');
    for (let index = 0; index < itensDaLista.length; index += 1) {
        itensDaLista[index].classList.remove('selected');
        itensDaLista[index].style.backgroundColor = 'unset';
    };
    event.target.style.backgroundColor = 'gray';
    event.target.classList.add('selected');
};

function completed(event) {
    let selected = event.target;
    selected.classList.toggle('completed');
    finalizados = document.querySelectorAll('.completed');
};

function apagarTudo() {
    while(listaOrdenada.firstChild) {
        listaOrdenada.removeChild(listaOrdenada.lastChild);
    };
};

function apagarFinalizados() {
    if(finalizados) {
        for (let index = finalizados.length - 1; index >= 0; index -= 1){
            finalizados[index].remove();
        };
    };
};

function salvarTarefas() {
    let data = listaOrdenada.innerHTML;
    localStorage.setItem('tarefas', JSON.stringify(data));
};

function carregarTarefas() {
    let dataRecuperado = JSON.parse(localStorage.getItem('tarefas'));
    listaOrdenada.innerHTML = dataRecuperado;
};

function moveUp() {
    let selected = document.querySelector('.selected');
    if (selected) {
        let auxiliar = selected.previousElementSibling;
        if (auxiliar) {
            selected.parentElement.insertBefore(selected, auxiliar);
        };
    };
};

function moveDown() {
    let selected = document.querySelector('.selected');
    if (selected) {
        let auxiliar = selected.nextElementSibling;
        if (auxiliar) {
            selected.parentElement.insertBefore(auxiliar, selected);
        };
    };
};

function removerSelecionado() {
    let selected = document.querySelector('.selected');
    if (selected) {
        selected.parentNode.removeChild(selected);
    };
};

botaoCriarTarefa.addEventListener('click', criarTarefa);
listaOrdenada.addEventListener('click', cinza);
listaOrdenada.addEventListener('dblclick', completed);
botaoApagarTudo.addEventListener('click', apagarTudo);
botaoApagarFinalizados.addEventListener('click', apagarFinalizados);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
botaoMoverCima.addEventListener('click', moveUp);
botaoMoverBaixo.addEventListener('click', moveDown);
botaoRemoverSelecionado.addEventListener('click', removerSelecionado);
window.onload = carregarTarefas;
