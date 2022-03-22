import {UserModel} from '../models/user.js';

async function auth(req, res, next) {
  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    res.status(401).json({
      message: 'Metodo de autenticacion invalido'
    });
  }

  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  try {
    req.user = await authenticate({username, password})
    next();
} catch (e) {
    res.status(401).json({
        message: `Email o contrasenia invalida`
    });
}
}

async function authenticate({username,password}) {
    const user = await UserModel.findOne({'username': username})
    if(user&&user.verifyPassword(password)) {
      return user
    } else {
      throw new Error 
  }
  }

export default auth