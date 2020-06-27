const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
  constructor() {
    super()
    this._driver = null
    this._herois = null

  }

  isConnected() {
    try {
      await this._driver.authenticate();
      return true;
    } catch (error) {
      console.error('fail!', error);
      return false;
    }
  }

  async defineModal() {
    this._herois = this._driver.define('heorois', {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      },
    },
    {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false,
    })
    await this._herois.sync()
  }

  async create(item) {
    const { dataValues } = await this._herois.create(item)

    return dataValues
  }

  async read(item = {}) {
    return this._herois.findAll({where: item, raw: true})
  }

  async connect() {
    this._driver = new Sequelize(
      'heroes',
      'jhonatanoliveira1',
      '123456',
      {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
      }
    )
    await this.defineModal()
  }

}

module.exports = Postgres