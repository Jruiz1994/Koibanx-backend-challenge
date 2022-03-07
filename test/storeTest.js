import assert from 'assert';
import request from 'supertest';
import app from '../app.js';

describe('Test unitario de stores', function() {

  const username = "test@koibanx.com";
  const password = "test123";
  const passwordErronea = "test12345";
  const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
  const authErroneo = 'Basic ' + Buffer.from(username + ':' + passwordErronea).toString('base64');

  it('el get de stores deberia devolver 200', function() {
    return request(app)
      .get('/api/stores')
      .set('Authorization', auth)
      .then(function(response) {
        assert.equal(response.status, 200);
      })
  });

  it('el get de stores deberia devolver 401 porque no esta autenticado', function() {
    return request(app)
      .get('/api/stores')
      .then(function(response) {
        assert.equal(response.status, 401);
      })
  });

  it('el get de stores deberia devolver 401 porque escribio mal la password', function() {
    return request(app)
      .get('/api/stores')
      .set('Authorization', authErroneo)
      .then(function(response) {
        assert.equal(response.status, 401);
      })
  });

  it('el post de stores deberia devolver 200', function() {
    return request(app)
      .post('/api/stores')
      .send({
        name: 'prueba Jenny',
        cuit: '123234567890',
        concepts: [
          {"Concepto 1": "testJenny"},
          {"Concepto 2": "testJenny"},
          {"Concepto 3": "testJenny"},
          {"Concepto 4": "testJenny"},
          {"Concepto 5": "testJenny"},
          {"Concepto 6": "testJenny"}
        ],
        currentBalance: 90,
        active: true,
        lastSale: '2022-02-24'
      })
      .set('Authorization', auth)
      .then(function(response) {
        assert.equal(response.status, 200)
      });
  });

  it('el post de stores deberia devolver 401 porque no esta autenticado', function() {
    return request(app)
      .post('/api/stores')
      .send({
        name: 'prueba Jenny',
        cuit: '123234567890',
        concepts: [
          {"Concepto 1": "testJenny"},
          {"Concepto 2": "testJenny"},
          {"Concepto 3": "testJenny"},
          {"Concepto 4": "testJenny"},
          {"Concepto 5": "testJenny"},
          {"Concepto 6": "testJenny"}
        ],
        currentBalance: 90,
        active: true,
        lastSale: '2022-02-24'
      })
      .then(function(response) {
        assert.equal(response.status, 401)
      });
  });

  it('el post de stores deberia devolver 401 porque escribio mal la password', function() {
    return request(app)
      .post('/api/stores')
      .send({
        name: 'prueba Jenny',
        cuit: '123234567890',
        concepts: [
          {"Concepto 1": "testJenny"},
          {"Concepto 2": "testJenny"},
          {"Concepto 3": "testJenny"},
          {"Concepto 4": "testJenny"},
          {"Concepto 5": "testJenny"},
          {"Concepto 6": "testJenny"}
        ],
        currentBalance: 90,
        active: true,
        lastSale: '2022-02-24'
      })
      .set('Authorization', authErroneo)
      .then(function(response) {
        assert.equal(response.status, 401)
      });
  });
});