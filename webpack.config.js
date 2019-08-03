/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

const { join } = require('path');

const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientDir = join(__dirname, 'src', 'client');

const DEV_MODE = process.env.NODE_ENV;

function getAliases(mode) {

  const aliases = {
    components: join(clientDir, 'components')
  };

  if (DEV_MODE === mode) {
    aliases[ 'react-dom' ] = '@hot-loader/react-dom';
  }

  return aliases;

}

// tslint:disable: object-literal-sort-keys
module.exports = {

  entry: join(clientDir, 'index.tsx'),
  mode: DEV_MODE,

  module: {
    rules: [

      // TS and TSX loader.
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
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
    ],
    alias: getAliases(this.mode)
  },

  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    port: 80,
    publicPath: 'http://localhost:80/',
    hotOnly: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    }),
    new HotModuleReplacementPlugin()
  ]

};
// tslint:enable: object-literal-sort-keys
