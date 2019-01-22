// function formatMoney(value) {
//   if (!value) return '0.00'
//   // 原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正
//   const intPart = Number(value).toString().split('.')[0] || 0 // 获取整数部分
//   const pattern = /(\d)(?=(?:\d{3})+$)/g
//   const intPartFormat = intPart.toString().replace(pattern, '$1,') // 将整数部分逢三进一
//   let floatPart = '.00' // 预定义小数部分
//   const value2Array = value.toString().split('.')
//   // =2表示数据有小数位
//   if (value2Array.length === 2) {
//     [, floatPart] = [value2Array[0], value2Array[1]] // 拿到小数部分
//     if (floatPart.length === 1) { // 补0,实际上用不着
//       return `${intPartFormat}.${floatPart}0`
//     }
//     return `${intPartFormat}.${floatPart}`
//   }
//   return intPartFormat
// }

import utils from './utils'

export default {
  install(Vue, options = {}) {
    Vue.filter('formatMoney', utils.formatMoney)
    Vue.filter('formatCarNum', utils.formatCarNum)
    Vue.filter('formatPrice', utils.formatPrice)
  },
}
