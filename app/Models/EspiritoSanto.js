'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EspiritoSanto extends Model {
    static get table () {
        return 'espirito_santo_federals'
      }
}

module.exports = EspiritoSanto
