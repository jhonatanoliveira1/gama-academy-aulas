class Data {
  // public dia: number;
  // mes: number;
  // ano: number;

  constructor(public dia: number, public mes: number, public ano: number = 1970) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1);

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 120
  ) {}

  private alterarVelocidade(delta: number) {
    // Faço as validiações de acelaração e freagem
    // this.velocidadeAtual = xxx
  }

  acelarar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelarar();
