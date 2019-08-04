/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { join } from 'path';

import { static as serveStatic } from 'express';

const app = require('express')();
const port = 80;
const STATIC_FOLDER = join(__dirname, '..', 'static');

app.use('/', serveStatic(STATIC_FOLDER));

app.listen(port, () => {

  /* eslint-disable no-console */
  console.log(`App listening on port ${port}`);

});
