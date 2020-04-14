const baseConfig = require('./webpack.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: './build/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
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
      'process.env': {
        NODE_ENV: '"development"',
        PLATFORM: '"dev"'
      }
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
