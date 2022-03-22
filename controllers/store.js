import StoreService from '../services/store.js'
import {StoreModel} from '../models/store.js'
const storesServ = new StoreService(StoreModel)
import logger from '../utils/logger.js'

// GET ALL STORES
export async function getAll(req, res) {
  try {
    const {page,perPage}=req.query;
    const options={
      page: parseInt(page) || 1,
      limit: parseInt(perPage) || 10
    }
    const dataJSON = await storesServ.getAll(options); 
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