// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 22;

// String
const nome: string = 'Jhonatan Oliveira'

// Array
const idades: number[] = [22, 24, 50, 62];
const idades2: Array<number> = [45, 23, 45, 64];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['jhonatan', 22 , true];

// Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejetiado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado; 

// Any
const retornoDaAPI: any[] = [122, 'jhonatan', false];
const retornoDaAPI2: any = {
  //.....
};

// Void 
function printarNaTela( msg: string): void {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objecto: object) {
  // ...
}
criar({
  proiedade: 1,
})
// criar('Jhonatan') // Dá erro

// Never
function loopInifito(): never {
  while(true) { }
}

function erro(messagem: string): never {
  throw new Error(messagem)
}

function falha() {
  return erro('Algo falhou');
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string ) {
  console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);