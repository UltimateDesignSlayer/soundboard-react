module.exports = {
  entry: './source/app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  },
  output: {
     path: './bin',
     filename: 'app.bundle.js'
  }
 };
