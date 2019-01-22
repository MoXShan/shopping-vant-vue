import Vue from 'vue'

// 创建自己的（模块）上下文require.context()
/* 三个参数
  要搜索的文件夹目录
  是否还应该搜索它的子目录，
  以及一个匹配文件的正则表达式
*/
const files = require.context('./modules/', true, /\.js/)
const modules = {}

// 中划线 -> 驼峰
function camelize(str) {
    return (`${str}`).replace(/-\D/g, match => match.charAt(1).toUpperCase())
  }
  
  
  files.keys().forEach((key) => {
    if (key === './index.js') return
    
    const moduleName = camelize(key.replace(/(^\.\/|\.js$)/g, ''))
    modules[moduleName] = files(key).default
  })
    
  Vue.prototype.$api = modules