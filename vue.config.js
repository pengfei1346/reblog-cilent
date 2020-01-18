const path = require('path')

//项目打包分析
// const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// yarn add compression-webpack-plugin --save-dev
// // gzip
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// // 定义压缩文件类型
// const productionGzipExtensions = ['js', 'css']

const env = process.env.NODE_ENV;

const name = '爱才后台管理系统'

const port =  8888

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: process.env.NODE_ENV === 'development',
      errors: process.env.NODE_ENV === 'development'
    },
    proxy: {
      "/dev": {
        target: 'http://localhost:3300',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/dev': '/'
        }
      }
    }
  }

}
