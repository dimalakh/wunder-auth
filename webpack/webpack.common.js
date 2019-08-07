const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: (path.resolve(__dirname), './src/index.jsx'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist/')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sсss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
              plugins: ['react-hot-loader/babel']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  stats: {
    hash: false,
    version: false,
    chunks: false,
    modules: false,
    children: false,
    colors: true
  }
}