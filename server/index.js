const server = require('./server.js');

const port = 5000

server.listen(port, () => {
  console.log(`\n===SERVER IS LISTENING ON ${port}===\n`);
});
