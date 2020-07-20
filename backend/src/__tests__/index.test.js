const supertest = require('supertest');
const app = require('..');

test('Hello world works', async (done) => {
  const response = await supertest(app.callback()).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World');
  done();
});
