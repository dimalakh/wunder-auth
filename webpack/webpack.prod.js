const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common.js')

const distDir = path.resolve(__dirname, '../dist/')

module.exports = merge(commonConfig, {
	mode: 'production',
	plugins: [new CleanWebpackPlugin([distDir], { root: process.cwd() })]
})