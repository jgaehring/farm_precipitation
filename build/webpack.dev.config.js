const baseConfig = require('./webpack.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  // context: (__dirname, 'node_modules/farmos-client'),
  entry: {
    app: './build/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  devServer: {
    contentBase: false, 
    proxy: [{
      logLevel: 'debug',
      context: [
        '/'
      ],
      target: 'http://localhost:80',
      changeOrigin: true,
      secure: false
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'development'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'build/index.dev.html',
      inject: true
    }),
  ]
})
