"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 22;
// String
var nome = 'Jhonatan Oliveira';
// Array
var idades = [22, 24, 50, 62];
var idades2 = [45, 23, 45, 64];
// Tuple
var jogadores;
jogadores = ['jhonatan', 22, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejetiado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [122, 'jhonatan', false];
var retornoDaAPI2 = {
//.....
};
// Void 
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objecto) {
    // ...
}
criar({
    proiedade: 1,
});
// criar('Jhonatan') // Dá erro
// Never
function loopInifito() {
    while (true) { }
}
function erro(messagem) {
    throw new Error(messagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'jhonatan',
        sobrenome: 'Oliveira',
        dataNascimento: new Date()
    }, { nome: 'Wellington',
        sobrenome: 'Sousa',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// Valores nulos
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Jhonatan',
    telefone1: '537593076',
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
//(<number>minhaIdade).toString();
//const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
