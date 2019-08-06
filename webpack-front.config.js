/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

/* eslint-disable @typescript-eslint/no-var-requires */

const { join } = require('path');

const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tempDir = join(__dirname, 'temp', 'client');
const clientDir = join(__dirname, 'src', 'client');
const distDir = join(__dirname, 'dist', 'static');

const isDevMode = (mode) => ('development' === mode);

function getAliases(mode) {

  const aliases = {
    components: join(clientDir, 'components')
  };

  if (isDevMode(mode)) {

    aliases[ 'react-dom' ] = '@hot-loader/react-dom';

  }

  return aliases;

}

function setAtcOptions(mode, configObj) {

  configObj.options.useCache = isDevMode(mode);

}

const clientWebpackConfig = {

  target: 'web',
  entry: join(clientDir, 'index.tsx'),
  mode: 'development',

  module: {
    rules: [

      // TS and TSX loader.
      // Must be the first entry, as this slot is used by setAtcOptions() to set the cache option.
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          cacheDirectory: tempDir
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },

      // SCSS loader.
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },

  resolve: {
    extensions: [
      '*', '.js', '.tsx', '.ts'
    ]
  },

  output: {
    path: distDir,
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: distDir,
    port: 80,
    publicPath: 'http://localhost:80/',
    hotOnly: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(clientDir, 'index.html')
    }),
    new HotModuleReplacementPlugin()
  ]

};

module.exports = (_env, argv) => {

  clientWebpackConfig.mode = argv.mode;

  clientWebpackConfig.resolve.alias = getAliases(argv.mode);
  setAtcOptions(argv.mode, clientWebpackConfig.module.rules[ 0 ]);

  return clientWebpackConfig;

};
