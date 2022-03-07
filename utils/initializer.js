import {UserModel} from '../models/user.js'
import {StoreModel} from '../models/store.js'
import logger from '../utils/logger.js'

export async function init() {
  //Si existe un usuario con ese username, me lo devuelve, pero sino me lo crea
  const user = await UserModel.findOne({"username": "test@koibanx.com"})
  if (user) {
    return
  } else {
    const resultado = await createUser()
    logger.info('usuario creado=>', resultado)
  }

  //Si no hay documentos en la coleccion de stores, llamo a la funcion para que me cree algunos
  const storesCantidad = await StoreModel.countDocuments()
  if (storesCantidad !== 0) {
    return
  } else {
    await createStore()
    logger.info('stores creadas')
  }

  async function createUser() {
    let user = new UserModel();
    user.username = "test@koibanx.com";
    user.password = "test123";
    const resultado = await UserModel.create(user);
    return resultado._doc.username
  }

  async function createStore() {
    const stores = [{
      "concepts": [
        {"Concepto 1": "test1"},
        {"Concepto 2": "test1"},
        {"Concepto 3": "test1"},
        {"Concepto 4": "test1"},
        {"Concepto 5": "test1"},
        {"Concepto 6": "test1"}
      ],
      "active": true,
      "name": "Store 1 test",
      "cuit": "123456789012",
      "currentBalance": 100,
      "lastSale": "2022-01-09"
    }, {
      "concepts": [
        {"Concepto 1": "test2"},
        {"Concepto 2": "test2"},
        {"Concepto 3": "test2"},
        {"Concepto 4": "test2"},
        {"Concepto 5": "test2"},
        {"Concepto 6": "test2"}
      ],
      "active": true,
      "name": "Store 2 test",
      "cuit": "987654321098",
      "currentBalance": 200,
      "lastSale": "2022-02-09"
    }, {
      "concepts": [
        {"Concepto 1": "test3"},
        {"Concepto 2": "test3"},
        {"Concepto 3": "test3"},
        {"Concepto 4": "test3"},
        {"Concepto 5": "test3"},
        {"Concepto 6": "test3"}
      ],
      "active": true,
      "name": "Store 3 test",
      "cuit": "765432156789",
      "currentBalance": 300,
      "lastSale": "2022-01-14"
    }]
    let resultados = await StoreModel.create(stores)
    return resultados
  }
}