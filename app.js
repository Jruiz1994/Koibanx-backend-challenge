import mongoose from 'mongoose';
import logger from './utils/logger.js';
mongoose.Promise = Promise;

import express from 'express'
const app = express()
import {config} from './config/default.js';
import auth from './utils/authentication.js'
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
import * as initializer from './utils/initializer.js'
initializer.init()

app.use(express.json())
app.use(auth)

import apiRouter from './routes/stores.js'
app.use('/api', apiRouter);

// Start the server
app.listen(config.port);
logger.info('API initialized on port ' + config.port);

export default app