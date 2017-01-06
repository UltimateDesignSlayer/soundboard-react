module.exports = {
  entry: './source/app.js',
  output: {
      path: './dist/js/',
      filename: 'app.bundle.js'
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
        loaders: ExtractTextPlugin.extract('style-loader!css-loader!sass-loader?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/css/style.bundle.css', {
      allChunks: true
    })
  ]
};
