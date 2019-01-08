'use strict';

const Path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const str = JSON.stringify;
const env = process.env;

module.exports = {
  target: 'web',
  entry: {
    'rcoin': './lib/rcoin',
    'rcoin-worker': './lib/workers/worker'
  },
  output: {
    library: 'rcoin',
    libraryTarget: 'umd',
    path: Path.join(__dirname, 'browser'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['-compat.js', '-browser.js', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.RCOIN_NETWORK':
        str(env.RCOIN_NETWORK || 'main'),
      'process.env.RCOIN_WORKER_FILE':
        str(env.RCOIN_WORKER_FILE || '/rcoin-worker.js')
    }),
    new UglifyJsPlugin()
  ]
};
