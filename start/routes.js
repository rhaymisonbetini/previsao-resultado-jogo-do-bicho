'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/esprito-santo-onze', 'AnimalGameController.getElevenResult');
Route.get('/teste', 'AnimalGameController.testCrypt');

