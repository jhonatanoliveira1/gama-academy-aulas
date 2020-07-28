module.exports = class Cliente{
  constructor(_id=0, _name="", _telefone="") {
    this.id = _id
    this.nome = _name
    this.telefone = _telefone
  }

  nomeUppercase() {
    return this.nome.toUpperCase()
  }

  static primeiro() {
    return new Cliente()
  }

  static todos(){
    return [
      new Cliente(1, "Jhonatan 1", "539873985735" ),
      new Cliente(2, "Jhonatan 2", "539873985735" ),
      new Cliente(3, "Jhonatan 3", "539873985735" ),
      new Cliente(4, "Jhonatan 4", "539873985735" ),
      new Cliente(5, "Jhonatan 5", "539873985735" ),
      new Cliente(6, "Jhonatan 6", "539873985735" ),
      new Cliente(7, "Jhonatan 7", "539873985735" ),
      new Cliente(8, "Jhonatan 8", "539873985735" ),
      new Cliente(9, "Jhonatan 9", "539873985735" ),
      new Cliente(10, "Jhonatan 10", "539873985735" ),
    ]
  }
}