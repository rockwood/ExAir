var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'es6-promise',
      './web/static/js/application.js'
    ],
  },

  output: {
    path: './priv/static',
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: '[id].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./web/static/js')
    ]
  },

  module: {
    preLoaders: [
      { test: /\.(js|jsx)$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],

    loaders: [
      {test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: 'babel', query: { presets: ['es2015', 'react'] }},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')},
      {test: /\.(ttf|woff2)$/, loader: 'url-loader', query: { limit: 1000, name: 'fonts/[name]-[hash].[ext]'}},
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000&name=images/[name]-[hash].[ext]'},
      {test: /\.(ico)$/i, loader: 'url?limit=10000&name=favicon.ico'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new TransferWebpackPlugin([{from: 'web/static/images', to: 'images'}]),
    new TransferWebpackPlugin([{from: 'web/static', to: ''}]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.MIX_ENV || 'dev')
      }
    })
  ],

  eslint: {
    configFile: '.eslintrc.js',
    failOnError: true,
    failOnWarning: true
  },

  devtool: 'source-map'
};
