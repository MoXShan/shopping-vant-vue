export default {
  // 商品总数量
  updateProductNumAll(state, { productNumAll, isAdd }) {
    if (isAdd) {
      state.productNumAll += productNumAll
    } else {
      state.productNumAll -= productNumAll
      if (state.productNumAll < 0) {
        state.productNumAll = 0
      }
    }
  },
  // active的index
  updateActiveBarIndex(state, index) {
    state.activeBarIndex = index
  },
  // 单个商品数量
  updateGoodsCar(state, { goodsId, isAdd }) {
    let value = state.goodsCar[goodsId]
    if (value === undefined) {
      value = 0
    }
    if (isAdd) {
      value += 1
    } else {
      value -= 1
    }
    state.goodsCar[goodsId] = value
  },
  // 购物车商品
  updateGoodsBuyingAll(state, { goodsBuyingAll, isAdd }) {
    const value = state.goodsBuyingAll
    // 判断是加还是减
    if (isAdd) {
      //  加
      if (value.length === 0) {
        value.push(goodsBuyingAll)
        return
      }
      // 长度不为0 查找相同的 不做处理 返回
      const someIndex = value.findIndex((item, index) => {
        return goodsBuyingAll.wareId === item.wareId
      })
      // 没有相同的 push到数组中
      if (someIndex === -1) {
        value.push(goodsBuyingAll)
      }
    } else {
      // 减
      if (value.length === 0) {
        return
      }
      // 长度不为0 查找到相同的 删除
      const someIndex = value.findIndex((item, index) => {
        return goodsBuyingAll.wareId === item.wareId
      })
      if (someIndex === -1) {
        return
      }
      // 有相同的 查看state中数量 若数量为0 删除
      if (state.goodsCar[goodsBuyingAll.wareId] < 1) {
        value.splice(someIndex, 1)
      }
    }
  },
}
