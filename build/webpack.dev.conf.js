const { merge} = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const SETTINGS_ISENV_PROD = false
// const API_BASEPREFIX = SETTINGS_ISENV_PROD
//   ? 'http://api.cloud.alilo.com.cn/api'
//   : 'http://api.dcloud.alilo.com.cn/api'

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: './',
  },
  devtool: 'eval-source-map',
  devServer: {
    // hot: true,
    // hotOnly: true,
    host: '0.0.0.0',
    // host:'localhost',
    port: 7070,
    // historyApiFallback: true,
    historyApiFallback: true,
    /**
     * 本地服务器所加载的页面所在的目录
     * 告诉服务器从哪里提供内容
     */
    contentBase: '/', //不是由webpack打包生成的静态文件
    /**
     * 将用于确定应该从哪里提供资源、此路径下的打包文件可在浏览器中访问，
     * 优先级高于contentBase
     * 
     * 因为在history模式中切换路由时，
     * 我们是真正改变了页面的url路径，
     * 所以webpack的runtime会认为它位于example.com/some/path。
     * 如果publicPath是设置的相对路径，
     * 那么webpack加载chunk时可能会变成example.com/some/path/static/js/3.js这样的路径，然而chunk的真正路径是example.com/static/js/3.js，所以我们需要将publicPath设置为绝对路径（publicPath: '/'）来解决这个问题

     */
    publicPath: '/',
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: {
      // '/api': {
      //   target: API_BASEPREFIX,
      //   secure: false, // 协议是https的时候必须要写
      //   changeOrigin: true,
      // },
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: "css-modules-typescript-loader"}, 
          {
            loader: 'css-loader',
            options: {
              // localIdentName: "[path][name]__[local]--[hash:base64:5]",
              modules: {
                // compileType: "module",
                // mode: "local",
                // auto: true,
                // exportGlobals: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                // localIdentContext: path.resolve(__dirname, "../src"),
                // localIdentHashPrefix: "my-custom-hash",
                // namedExport: true,
                // exportLocalsConvention: "camelCase",
                // exportOnlyLocals: false,
              },
              sourceMap: true,
              importLoaders: 1, // 需要先被 less-loader 处理，所以这里设置为 1
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
