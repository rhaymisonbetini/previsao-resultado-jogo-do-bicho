'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EspiritoSantoFederalSchema extends Schema {
  up () {
    this.create('espirito_santo_federals', (table) => {
      table.increments()
      table.string('premio')
      table.string('data')
      table.string('hora')
      table.integer('resultado')
      table.timestamps()
    })
  }

  down () {
    this.drop('espirito_santo_federals')
  }
}

module.exports = EspiritoSantoFederalSchema
