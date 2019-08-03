/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

const { join } = require('path');

const { static: serveStatic } = require('express');

const app = require('express')();
const port = 80;
const DIST_FOLDER = join(__dirname, '..', '..', 'dist');
const PUBLIC_FOLDER = join(__dirname, '..', '..', 'public');

app.use('/dist', serveStatic(DIST_FOLDER, {
  etag: true,
  cacheControl: true
}));

app.use(serveStatic(PUBLIC_FOLDER, {
  etag: true,
  cacheControl: true
}));

app.listen(port, () => {

  console.log(`App listening on port ${port}`);

});
