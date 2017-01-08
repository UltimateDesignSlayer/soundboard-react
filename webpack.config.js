var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/app.js',
  output: {
      path: './assets/',
      filename: 'js/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.bundle.css', {
      allChunks: true
    })
  ]
};
