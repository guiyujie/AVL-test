const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  configureWebpack: {
    resolve: {
      alias: {
        'lib': "@/lib",
        'view': "@/view",
        'api': "@/api",
        'mock': "@/mock",
        'components': "@/components",
        'assets': "@/assets",
        'config': "@/config"
      }
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: __dirname + '/src/mock',
          to: __dirname + '/public',
          toType: "dir"
        }
      ])
    ]
  },
  //开发服务器设置
  devServer: {

  }
}