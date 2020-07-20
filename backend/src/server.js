const Koa = require('koa');
const http = require('http');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

const server = http.createServer(app.callback());

module.exports = server;
