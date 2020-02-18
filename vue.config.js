const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  configureWebpack: {
    resolve: {
      alias: {
        'lib': "@/lib",
        'view': "@/view",
        'api': "@/api",
        'middleware': "@/middleware",
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
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://localhost:8888/',
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  }
}