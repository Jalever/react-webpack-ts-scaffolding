const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const AutoDllPlugin = require('autodll-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.tsx'),
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: isDev? '/':'/assessment/',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: {
          // cacheDirectory: true
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        // css-loader(处理我们的css，主要负责解析 @import这种语法的)
        // style-loader 它是把 css 插入到 head 的标签中
        // loader的特点： 希望单一性（一个loader处理一件事情）
        // loader 的用法 ：一个 loader 用字符串表示，多个loader 需要用 []表示
        // loader 的顺序，默认是从右向左执行 从下到上执行
        // loader 还可以写成对象的方式，可以传参数
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当文件大于5kb时走file-loader相关的配置
              limit: 5120,
              // 这个参数要设置成false,不然生成图片的路径时[object Module]
              esModule: false,
              // 当文件大于5kb时走file-loader相关的配置
              fallback: 'file-loader',
              // 生成的路径和文件名
              name: 'images/[name].[hash:4].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5120,
              esModule: false,
              fallback: 'file-loader',
              name: 'fonts/[name].[hash:4].[ext]',
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:4].css',
      chunkFilename: 'css/[name].[hash:4].css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
    }),
  ],
  /**
   * key: 作为import xx from "yyy";
   * value: 作为全局对象,挂载在window上
   */
  externals: {

  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@utils": path.resolve(__dirname, "../src/assets/utils"),
      "@request": path.resolve(__dirname, "../src/request"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@store": path.resolve(__dirname, "../src/store"),
      "@img": path.resolve(__dirname, "../src/assets/images"),
    }
  },
  
}
