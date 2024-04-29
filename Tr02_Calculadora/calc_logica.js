//Script para a lógica da calculadora

let resultado = document.getElementById('resultado');
let rascunho = '';

function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    if(!isNaN(num)){
        atualizar(num);
    }
}

function atualizar(num){
    rascunho += num;
    document.getElementById('rascunho').innerHTML = rascunho;
}

function limpar() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('rascunho').innerHTML = '';
}

function apagar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function operador(op) {
    if (rascunho !== '') {
        calcular();
    }
    rascunho = tela.innerHTML + ' ' + op + ' ';
    document.getElementById('rascunho').innerHTML = rascunho;
    resultado.innerHTML = '';
}

function calcular() {
    var expressao = document.getElementById('resultado').innerHTML;
    if (expressao) {
        var resultadoCalculado = eval(expressao);
        document.getElementById('resultado').innerHTML = resultadoCalculado;
        rascunho = resultadoCalculado.toString(); // Atualiza o rascunho com o novo resultado
        document.getElementById('rascunho').innerHTML = rascunho;
    } else {
        document.getElementById('resultado').innerHTML = 'Nada...';
    }
}