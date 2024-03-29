const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
  nome: 'Gavião Negro',
  poder: 'Flexas'
}

describe('Postgres Strategy', function() {
  this.timeout(Infinity)
  this.beforeAll( async function() {
    db= await context.connect()
  })
  it('PostgresSQL Connection', async function() {
    const reuslt = await context.isConnected()
    assert.equal(reuslt, true)
  })
  it('cadastrar', async function() {
    const result = await context.create(MOCK_HEROI_CADASTRAR)
    delete result.id
    assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })
  it('listar', async function() {
    const [result] =await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
    delete result.id
    // pegar a primeira posicao
    // const posicaoZero = result[0]

    assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })
})