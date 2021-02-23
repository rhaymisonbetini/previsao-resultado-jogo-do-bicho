'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EspiritoSantoFederalSchema extends Schema {
  up () {
    this.create('espirito_santo_federals', (table) => {
      table.string('premio')
      table.string('data')
      table.integer('resultado')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('espirito_santo_federals')
  }
}

module.exports = EspiritoSantoFederalSchema
