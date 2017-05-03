module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + '/app/js/index.js',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
}