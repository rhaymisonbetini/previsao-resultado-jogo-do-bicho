'use strict'


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AnimalDatas extends Model {
    static get table() {
        return 'animal_datas'
    }
}

module.exports = AnimalDatas
