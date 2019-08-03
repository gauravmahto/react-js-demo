/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

const { join } = require('path');

const { static: serveStatic } = require('express');

const app = require('express')();
const port = 80;
const DIST_FOLDER = join(__dirname, '..', '..', 'dist');

app.use('/', serveStatic(DIST_FOLDER));

app.listen(port, () => {

  console.log(`App listening on port ${port}`);

});
