const path = require('path')

//项目打包分析
const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// yarn add compression-webpack-plugin --save-dev
// // gzip
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// // 定义压缩文件类型
// const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
  return path.join(__dirname, dir)
}

const env = process.env.NODE_ENV;

const name = '管理系统'

const port = process.env.port || process.env.npm_config_port || 8088 // dev port

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
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    //项目打包分析
    plugins: [new WebpackBundleAnalyzerPlugin()],
    //element-ui  cdn
    externals: {
      'vue': 'Vue',
      'element-ui': 'ELEMENT'
    },
    // gzip 压缩
    // plugins: [
    //   new CompressionWebpackPlugin({
    //     filename: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //     threshold: 10240,// 对超过10k的数据压缩
    //     minRatio: 0.8,
    //     deleteOriginalAssets: true // 不删除源文件
    //   })
    // ]
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // set svg-sprite-loader
    config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()

    // set preserveWhitespace
    config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.compilerOptions.preserveWhitespace = true
          return options
        })
        .end()

    config
    // https://webpack.js.org/configuration/devtool/#development
        .when(process.env.NODE_ENV === 'development',
            config => config.devtool('cheap-source-map')
        )

    config
        .when(process.env.NODE_ENV !== 'development',
            config => {
              config
                  .plugin('ScriptExtHtmlWebpackPlugin')
                  .after('html')
                  .use('script-ext-html-webpack-plugin', [{
                    // `runtime` must same as runtimeChunk name. default is `runtime`
                    inline: /runtime\..*\.js$/
                  }])
                  .end()
              config
                  .optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                  libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial' // only package third parties that are initially dependent
                  },
                  // elementUI: {
                  //   name: 'chunk-elementUI', // split elementUI into a single package
                  //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                  // },
                  commons: {
                    name: 'chunk-components',
                    test: resolve('src/components'), // can customize your rules
                    minChunks: 3, //  minimum components number
                    priority: 5,
                    reuseExistingChunk: true
                  }
                }
              })
              config.optimization.runtimeChunk('single')
            }
        )
  },
}
