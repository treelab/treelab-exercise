// server.js
const next = require('next');
const express = require('express');
const routes = require('./routes');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
});
const handler = routes.getRequestHandler(app);

try {
  app.prepare().then(() => {
    express()
      .use(handler)
      .listen(Number(process.env.PORT || 4001));
  });
} catch (err) {
  // eslint-disable-next-line no-console
  console.log(err);
}
