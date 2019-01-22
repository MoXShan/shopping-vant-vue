<template>
<van-row gutter="20" class="van-row" @click="goProductDetail">
  <van-col span="8" class="img">
    <img :src="item.wareImg" alt="">
  </van-col>
  <van-col span="16" class="text">
    <div class="wareName">{{ item.wareName }}</div>
    <div>
      <div class="price">
        <span class="origPrice">{{ '¥' + item.marketPrice | formatPrice }}</span>
        <span class="marketPrice" v-if="item.origPrice > item.marketPrice">{{ '¥' + item.origPrice | formatPrice }}</span>
      </div>
      <div class="symbol">
        <span class="minus" @click="minus(item)" v-if="productNum > 0">-</span>
        <span class="productNum" v-if="productNum > 0">{{ productNum }}</span>
        <span class="plus" @click="plus($event, item)">+</span>
      </div>
    </div>
    <transition
      name="drop"
      v-for="(itm, idx) in balls"
      :key="idx"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
    <div v-show="itm.show" class="ball" v-bind:css="false">
      <img :src="item.wareImg" alt="" class="inner inner-hook" id="img">
    </div>
  </transition>
  </van-col>
</van-row>
</template>
<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      productNum: 0,
      balls: [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false },
      ],
      dropBalls: [],
    }
  },
  mounted() {
    const num = this.$store.state.goodsCar[this.item.wareId]
    if (num === undefined) {
      this.productNum = 0
      return
    }
    this.productNum = num
  },
  computed: {
    
  },
  methods: {
    goProductDetail() {
      this.$router.push('/product-detail')
    },
    plus(event, item) {
      this.productNum = this.productNum + 1
      // 商品总数量
      this.$store.commit('updateProductNumAll', { 'productNumAll': 1, 'isAdd': true })
      // 购买商品种类
      this.$store.commit('updateGoodsCar', { 'goodsId': item.wareId, 'isAdd': true })
      // 购买商品 item
      this.$store.commit('updateGoodsBuyingAll', { 'goodsBuyingAll': item, 'isAdd': true })
      const img = event.target.parentNode.parentNode.parentNode.previousElementSibling.children[0] // 上一个兄弟节点: previousElementSibling
      // 传入要下落的img(el)
      this.drop(img)
    },
    minus(item) {
      this.productNum = this.productNum - 1
      this.$store.commit('updateProductNumAll', { 'productNumAll': 1, 'isAdd': false })
      this.$store.commit('updateGoodsCar', { 'goodsId': item.wareId, 'isAdd': false })
      this.$store.commit('updateGoodsBuyingAll', { 'goodsBuyingAll': item, 'isAdd': false })
    },
    // 小球动画方法, el就是要下落的元素
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    // 下落之前
    beforeEnter(el) {
      let count = this.balls.length
      while (count--) {
        const ball = this.balls[count]
        if (ball.show) {
          const rect = ball.el.getBoundingClientRect() // rect 是一个具有四个属性left、top、right、bottom的DOMRect对象(相对于视口左上角)
          // boll的位置
          const xboll = rect.right - 50
          const y = -(window.innerHeight - rect.top - 100)
          el.style.webkitTransform = `translate3d(0,${y}px,0)`
          el.style.transform = `translate3d(0,${y}px,0)`
          const inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${xboll}px,0,0)`
          inner.style.transform = `translate3d(${xboll}px,0,0)`
        }
      }
    },
    // 下落中
    enter(el) {
      /* eslint-disable no-unused-vars */
      const rf = el.offsetHeight
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)'
        el.style.transform = 'translate3d(0,0,0)'
        const inner = el.getElementsByClassName('inner-hook')[0]
        // 下落的位置
        const x = (window.innerWidth) * (2.8 / 5)
        inner.style.webkitTransform = `translate3d(${x}px,0,0)`
        inner.style.transform = `translate3d(${x}px,0,0)`
      })
    },
    // 下落后
    afterEnter(el) {
      const ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.van-row {
  // height: 200px;
  .img {
    height: 100%;
    padding-top: 25px;
    text-align: center;
    img {
      width: 200px;
      height: 150px;
    }
  }
  .text {
    padding: 20px 0px;
    font-size: 30px;
    border-bottom: 3px solid #efefef;
    .wareName {
      margin-bottom: 80px;
    }
    .price {
      float: left;
      .origPrice {
        color: red;
        margin-right: 20px;
      }
      .marketPrice {
        text-decoration: line-through;
        color: #ccc;
      }
    }
    .symbol {
      float: right;
      color: red;
      .plus, .minus {
        display: inline-block;
        font-size: 50px;
        font-weight: 700;
        width: 50px;
        height: 50px;
        border: 3px solid red;
        border-radius: 8px;
        text-align: center;
        margin-right: 0px;
        line-height: 40px;
      }
      .minus {
        color: #ccc;
        border: 3px solid #ccc;
        margin-right: 20px;
      }
      .productNum {
        display: inline-block;
        color: #000;
        margin-right: 20px;
      }
    }
  }
  .ball {
    position: fixed;
    left: 100px;
    bottom: 100px;
    z-index: 2000;
    transition: all 0.4s cubic-bezier(0.49,-0.29,0.75,0.41);
    .inner {
      position: relative;
      z-index: 3000;
      width: 200px;
      height: 200px;
      transition: all 0.4s linear;
      transition: all 0.4s linear;
    }
  }
}
</style>
