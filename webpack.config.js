/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

/* eslint-disable @typescript-eslint/no-var-requires */

const clientWebpackConfig = require('./webpack-front.config');
const serverWebpackConfig = require('./webpack-back.config');

module.exports = (env, argv) => {

  const webpackConfigs = [ clientWebpackConfig(env, argv) ];

  if ('client' !== argv.start) {

    webpackConfigs.push(serverWebpackConfig(env, argv));

  }

  return webpackConfigs;

}
