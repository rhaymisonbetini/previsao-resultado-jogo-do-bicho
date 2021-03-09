'use strict'

const AnimalDatas = use('App/Models/AnimalDatas');

class AnimalDatasRepository {

    async findAnimalGroup(number) {

        return await AnimalDatas.query()
            .where('n1', number)
            .orWhere('n2', number)
            .orWhere('n3', number)
            .orWhere('n4', number)
            .first();
    }

}

module.exports = AnimalDatasRepository;