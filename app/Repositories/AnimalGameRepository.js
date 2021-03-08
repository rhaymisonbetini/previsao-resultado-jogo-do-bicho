'use strict'

const EspiritoSanto = use('App/Models/EspiritoSanto')

class AnimalGameRepository {

    async getResultOrderByDayAsc() {
        return await EspiritoSanto.query()
            .select('data', 'resultado')
            .orderBy('data', 'desc')
            .fetch();
    }

}

module.exports = AnimalGameRepository;
