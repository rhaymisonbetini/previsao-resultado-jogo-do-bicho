'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalDataSchema extends Schema {
  up () {
    this.create('animal_datas', (table) => {
      table.increments()
      table.string('name')
      table.string('n1')
      table.string('n2')
      table.string('n3')
      table.string('n4')
      table.text('path')
      table.timestamps()
    })
  }

  down () {
    this.drop('animal_datas')
  }
}

module.exports = AnimalDataSchema
