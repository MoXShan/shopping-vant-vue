<template>
<div class="product-detail-buying">
  <div class="left">
    <van-icon name="cart-o" size="30px" />
    <span class="left-buyNum" v-if="buyNum >= 1">{{ buyNum }}</span>
    <span class="left-buyNum" v-else>0</span>
  </div>
  <div class="right">
    <span class="text" v-if="buyNum >= 1">购买数量:</span>
    <span class="buyMius" v-if="buyNum >= 1" @click="buyMius">-</span>
    <span class="buyNum" v-if="buyNum >= 1">{{ buyNum }}</span>
    <span class="buyPlus" @click="buyPlus">+</span>
  </div>
  <transition
    name="drop"
    v-for="(itm, idx) in balls"
    :key="idx"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
    <div v-show="itm.show" class="ball" v-bind:css="false">
      <!-- <img :src="item.wareImg" alt="" class="inner inner-hook" id="img"> -->
    </div>
  </transition>
</div>
</template>
<script>
export default {
  props: {
    productDetail: Object,
  },
  data() {
    return {
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
  computed: {
    goodsCar() {
      return this.$store.state.goodsCar
    },
    buyNum() {
      return this.goodsCar[this.productDetail.wareId]
    },
  },
  methods: {
    buyPlus() {
      console.log('buyPlus', this.buyNum)
      // 商品总数量
      this.$store.commit('updateProductNumAll', { 'productNumAll': 1, 'isAdd': true })
      // 购买单个商品种类
      this.$store.commit('updateGoodsCar', { 'goodsId': this.productDetail.wareId, 'isAdd': true })
    },
    buyMius() {
      if (this.buyNum > 1) {
        console.log('buyMius', this.buyNum)
        this.$store.commit('updateProductNumAll', { 'productNumAll': 1, 'isAdd': false })
        this.$store.commit('updateGoodsCar', { 'goodsId': this.productDetail.wareId, 'isAdd': false })
      }
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
.product-detail-buying {
  background-color: #fff;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 30px;
  border-top: 1px solid #ccc;
  .left {
    float: left;
    border-right: 1px solid #efefef;
    padding-right: 30px;
    position: relative;
    .left-buyNum {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #F43000;
      color: #fff;
      text-align: center;
      position: absolute;
      top: -6px;
      right: 8px;
    }
  }
  .right {
    float: right;
    font-size: 40px;
    .text {
      color: #666;
      margin-right: 20px;
    }
    .buyMius, .buyPlus {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 10px;
      border: 3px solid #ccc;
      text-align: center;
      font-size: 50px;
      vertical-align: middle;
      line-height: 50px;
      color: #666;
    }
    .buyMius {

    }
    .buyNum {
      font-size: 20px;
      margin: 0 30px;
    }
    .buyPlus {
      color: #fff;
      background-color: #FF741E;
    }
  }
}
</style>
