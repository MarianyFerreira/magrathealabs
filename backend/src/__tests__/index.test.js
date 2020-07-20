const supertest = require('supertest');
const server = require('../server');

test('Hello world works', async (done) => {
  const response = await supertest(server).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World');
  done();
});
