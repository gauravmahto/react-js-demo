/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { join } from 'path';

import { static as serveStatic, Request, Response } from 'express';

import appConfig from './config';

const app = require('express')();
const port = appConfig.port || 80;
const STATIC_FOLDER = join(__dirname, '..', 'static');

// Serve static files.
app.use(serveStatic(STATIC_FOLDER));

// Handles any requests that don't match any of the existing ones.
app.get('*', (_req: Request, res: Response) => {

  res.sendFile(join(STATIC_FOLDER, 'index.html'));

});

app.listen(port, () => {

  /* eslint-disable no-console */
  console.log(`App listening on port ${port}`);

});
