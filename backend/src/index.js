/* eslint-disable no-console */
const server = require('./server');

const start = () => {
  server.listen(3100);
  console.log('Server is listening on port', 3100);
};

const shutdown = (sig) => {
  console.log('API shutdown', sig);
  server.close((err) => process.exit(err ? 1 : 0));
};

process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);

start();

module.exports = {
  start,
  server,
};
