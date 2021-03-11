'use strict'

const EspiritoSanto = use('App/Models/EspiritoSanto');

/*
|--------------------------------------------------------------------------
| EspiritoSantoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class EspiritoSantoSeeder {

  async run() {


    let resultsOfEspiritoSanto = [
      {
        award: '1',
        result: '0593',
        data: '23/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '3472',
        data: '22/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '4151',
        data: '21/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '3220',
        data: '20/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '7705',
        data: '19/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '5842',
        data: '18/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '3332',
        data: '17/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '3817',
        data: '16/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '8251',
        data: '15/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '4898',
        data: '14/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '2067',
        data: '13/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '5002',
        data: '12/02/2021',
        hora: '11',
      },
      {
        award: '1',
        result: '0824',
        data: '11/02/2021',
        hora: '11',
        grupo: '1'
      },
      {
        award: '1',
        result: '9552',
        data: '10/02/2021',
        hora: '11',
      },

    ]
    for (let i = 0; i < resultsOfEspiritoSanto.length; i++) {
      await this.createResult(resultsOfEspiritoSanto[i]);
    }
  }

  async createResult(result) {
    await EspiritoSanto.create({
      premio: result.award,
      resultado: result.result,
      data: result.data,
      hora: result.hora,
    })
    return;
  }

}



module.exports = EspiritoSantoSeeder
