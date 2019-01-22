const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'static',
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    disableHostCheck: true,
    // proxy: {
    //   '/asboss': {
    //     // target: 'https://yapi.advai.net/mock/370',
    //     target: 'https://mosaic.kreditpintar.net', // 设置调用的接口域名和端口号
    //     changeOrigin: true, // 跨域
    //     secure: false,
    //     xfwd: false,
    //   },
    // },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
}
