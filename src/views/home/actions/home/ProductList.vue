<template>
<div class="home-product-list" @click="goProductDetail">
  <img :src="item.wareImg" alt="" class="img" id="img">
  <div class="text">{{ item.wareName }}</div>
  <div class="priceNum">
    <div class="price">
      <div class="origPrice" v-if="item.origPrice > item.marketPrice">{{ '¥' + item.origPrice | formatPrice }}</div>
      <div class="origPrice" v-else>{{ ' ' }}</div>
      <div class="promotionPrice">{{ '¥' + item.marketPrice | formatPrice }}</div>
    </div>
    <div class="productNum">
      <div class="plus" @click="plus($event, item)">+</div>
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
</div>
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
  methods: {
    goProductDetail() {
      this.$router.push('/product-detail')
    },
    plus(event, item) {
      this.productNum++
      this.$store.commit('updateProductNumAll', { 'productNumAll': 1, 'isAdd': true })
      this.$store.commit('updateGoodsCar', { 'goodsId': item.wareId, 'isAdd': true })
      this.$store.commit('updateGoodsBuyingAll', { 'goodsBuyingAll': item, 'isAdd': true })
      const img = event.target.parentNode.parentNode.previousElementSibling.previousElementSibling
      // 传入要下落的img(el)
      this.drop(img)
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
      console.log('el', el)
      let count = this.balls.length
      while (count--) {
        const ball = this.balls[count]
        if (ball.show) {
          const rect = ball.el.getBoundingClientRect() // rect 是一个具有四个属性left、top、right、bottom的DOMRect对象(相对于视口左上角)
          // boll的位置
          const xboll = rect.right - 50
          const y = -(window.innerHeight - rect.top - 200)
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
.home-product-list {
  height: 400px;
  padding: 20px;
  position: relative;
  .img, .newImg {
    width: 200px;
    height: 200px;
    display: block;
  }
  .text{
    margin: 20px 0px;
    width: 100%;
    text-align: left;
    height: 80px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .priceNum {
    .price {
      float: left;
      .origPrice {
        height: 30px;
        color: #ccc;
        text-align: left;
        text-decoration: line-through;
      }
    }
    .productNum {
      float: right;
      .plus {
        color: red;
        border: 3px solid red;
        width: 40px;
        height: 40px;
        line-height: 35px;
        text-align: center;
        vertical-align: middle;
        border-radius: 8px;
        position: relative;
        top: 15px;
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
