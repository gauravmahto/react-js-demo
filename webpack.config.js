/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// tslint:disable: object-literal-sort-keys
module.exports = {

  entry: './src/client/index.tsx',
  mode: 'development',

  module: {
    rules: [

      // TS and TSX loader.
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader'
      },

      // CSS loader.
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
