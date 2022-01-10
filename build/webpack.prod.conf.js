const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // esModule: false,
              // esModule: true,
              // modules: {
              //   namedExport: true,
              // },
            },
          },
          { loader: 'css-modules-typescript-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
              importLoaders: 1, // 需要先被 less-loader 处理，所以这里设置为 1
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
})
