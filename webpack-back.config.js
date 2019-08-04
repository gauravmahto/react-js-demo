/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

/* eslint-disable @typescript-eslint/no-var-requires */

const { join } = require('path');

const { HotModuleReplacementPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');

const tempDir = join(__dirname, 'temp', 'server');
const serverDir = join(__dirname, 'src', 'server');
const outServerDir = join(__dirname, 'dist', 'server');

const isDevMode = (mode) => ('development' === mode);

function setAtcOptions(mode, configObj) {

  configObj.options.useCache = isDevMode(mode);

}

const serverWebpackConfig = {

  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: join(serverDir, 'app.ts'),
  mode: 'development',

  module: {
    rules: [

      // TS loader.
      // Must be the first entry, as this slot is used by setAtcOptions() to set the cache option.
      {
        test: /\.ts?$/,
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: join(serverDir, 'tsconfig.json'),
          useCache: true,
          cacheDirectory: tempDir
        }
      }

    ]
  },

  resolve: {
    extensions: [
      '.ts'
    ]
  },

  externals: [
    nodeExternals()
  ],

  output: {
    path: outServerDir,
    filename: 'app.js'
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ]

};

module.exports = (_env, argv) => {

  serverWebpackConfig.mode = argv.mode;

  setAtcOptions(argv.mode, serverWebpackConfig.module.rules[ 0 ]);

  return serverWebpackConfig;

};
