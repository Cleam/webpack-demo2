var path = require('path');
var webpack = require('webpack');
var publicPath = './';

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: './app/index.js',

  output: {
    path: path.join(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map'
  },

  devServer: {
    port: 7777,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath
  }
}