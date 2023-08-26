import { createServer } from 'http';

import 'dotenv/config';
import { program } from 'commander';

let PORT = process.env.PORT || 3000;

program.option('-v, --version');
program.option('-p, --port <value>');

program.parse();
const options = program.opts();

if (options.version) {
  console.log('version 1.0.0');
  process.exit(0);
}

if (options.port) {
  console.log(options.port);
  PORT = options.port;
}

const server = createServer((req, res) => {
  if (req.method !== 'GET') {
    server.emit('error', new Error(`Unsupported method ${req.method}`));
  }

  console.log('LA URL', req.url);

  // TEMP
  // const url = new URLSearchParams(req.url);
  // console.log('LA URL mas GUAY', url.get('/calculator?a'), url.get('b'));

  // Temp

  if (!req.url) return;
  console.log(req.url);
  console.log(req.headers.host);
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log('url', url);

  // eslint-disable-next-line no-negated-condition
  if (url.pathname !== '/calculator') {
    server.emit('error', new Error(`Unsupported pathname`));
  } else {
    console.log(url.searchParams.get('a'));
    console.log(url.searchParams.get('b'));
  }

  console.log(req.method, req.url, 'Hola mundo');
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 202;
  res.write('<h1>Hola Mundo</h1>');
  res.end();
});

server.listen(PORT);

server.on('listening', () => {
  console.log(`Lisening on port ${PORT}`);
});

server.on('error', (error) => {
  console.log(`Error ${error.message}`);
});
