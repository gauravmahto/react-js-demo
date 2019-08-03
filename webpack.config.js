/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

const { join, resolve } = require('path');

const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {

  entry: './src/index.js',
  mode: 'development',

  module: {
    rules: [

      // Transform JSX and ES6 syntax.
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env'
          ]
        }
      },

      // CSS loader.
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }

    ]
  },

  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  },

  output: {
    path: resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ]

};
