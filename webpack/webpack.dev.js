const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8080,
    contentBase: '../dist/',
    historyApiFallback: true,
    open: true,
    stats: {
      hash: false,
      version: false,
      chunks: false,
      modules: false,
      children: false,
      colors: true
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_BASE': JSON.stringify('http://localhost:3000')
    })
  ]
})