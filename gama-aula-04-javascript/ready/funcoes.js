function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log('Olá Gama! você é o' + nome);
}

var resultadoDaSoma = soma(1, 2);
var resultadoNovoDaSoma  = soma(10, 60);

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaGama('JC');