import StoreService from '../services/store.js'
import {StoreModel} from '../models/store.js'
const storesServ = new StoreService(StoreModel)
import logger from '../utils/logger.js'

// GET ALL STORES
export async function getAll(req, res) {
  try {
    //PAGINATION
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const dataCruda = await storesServ.getAll(); // data cruda sin paginar
    const total = dataCruda.length;
    const pages = total / limit
    const dataCrudaPaginada = dataCruda.slice(startIndex, endIndex)
    const dataJSON = {
      data: dataCrudaPaginada,
      page: page,
      pages: pages,
      limit: limit,
      total: total
    }
    res.status(200).send(dataJSON)
  } catch (error) {
    logger.error(error);
  }
}

//POST CARRITO
export async function saveStore(req, res) {
  try {
    const store = await storesServ.saveStore(req.body);
    res.status(200).send(store)
  } catch (error) {
    logger.error(error);
  }
}