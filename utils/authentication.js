import {UserModel} from '../models/user.js';

function auth(req, res, next) {
  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({
      message: 'Metodo de autenticacion invalido'
    });
  }

  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  authenticate({username, password}).then(function(user) {
    req.user = user;
    next();
  }).catch(function() {
    return res.status(401).json({
      message: 'Email o contrasenia invalida'
    });
  });
}

async function authenticate({username,password}) {
  //aca habia puesto un try
    const user=await UserModel.findOne({'username': username})
    if(user&&user.verifyPassword(password)) {
      return user
    } else {
      throw new Error(err)
  }
  //aca estaba el catch con el throw new Error de nuevo
  }

export default auth