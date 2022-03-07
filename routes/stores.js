import express from 'express';
const apiRouter = new express.Router();
import * as controller from '../controllers/store.js'

apiRouter.get('/stores', controller.getAll)
.post('/stores', controller.saveStore);

export default apiRouter