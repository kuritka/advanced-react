/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './lib/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  resolve: {
    modules: [
      //thanx to this I can have following line in App.jsx
      //import DataApi from 'state-api';
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  entry: ['babel-polyfill','./lib/renderers/dom.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}