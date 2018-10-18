const path = require('path');
const webpack = require('webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  entry: {
    server: './server.ts',
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  externals: [/(node_modules|main\..*\.js)/,],
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new FilterWarningsPlugin({ 
      exclude: /System.import/ 
    }),
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
}