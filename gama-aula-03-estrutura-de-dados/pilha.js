var elementos = [];
var topo = -1;
const Max = 10;

function push(num) {
    if (topo < MAX) {
        topo = topo + 1;
        elementos[topo] = num
    }
    else {
        console.log("Pilha esta cheia");
    }
}

function estaVazia() {
    return topo == -1;
}

function pop(){
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo -1;
        return num;
    }
    else {
        console.log("Pilha esta vazia!")
    }
}

// -------- parte do codigo que usa a pilha -------- //

var resto;

console.log("Hora de empilhar...");

while (numDecimal != 0) {
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = perseInt (numDecimal / 2);
}

console.log("Desempilhando tudo...");

while (!estaVazia()) {
    console.log(pop());
}
