<template>
<van-row gutter="20" class="van-row" @click="goProductDetail">
  <van-col span="2" class="circle">
    <span class="circle-inner" :class="[ isDuihao ? 'duihao-background-color': '' ]" @click="onCilcle">
      <span class="duihao">&#10003;</span>
    </span>
  </van-col>
  <van-col span="6" class="img">
    <img :src="item.wareImg" alt="">
  </van-col>
  <van-col span="16" class="text">
    <div class="wareName">{{ item.wareName }}</div>
    <div>
      <div class="price">
        <span class="origPrice">{{ '¥' + item.origPrice | formatPrice }}</span>
        <span class="marketPrice" v-if="item.marketPrice > item.origPrice">{{ '¥' + item.marketPrice | formatPrice }}</span>
      </div>
      <div class="symbol">
        <span class="minus" @click="minus(item)">-</span>
        <span class="productNum" v-if="productNum >= 0">{{ productNum }}</span>
        <span class="plus" @click="plus($event, item)">+</span>
      </div>
    </div>
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
      isDuihao: true,
    }
  },
  computed: {

  },
  mounted() {
    const num = this.$store.state.goodsCar[this.item.wareId]
    if (num === undefined) {
      this.productNum = 0
      return
    }
    this.productNum = num
  },
  methods: {
    goProductDetail() {
      this.$router.push('/product-detail')
    },
    plus(event, item) {
      this.productNum = this.productNum + 1
      // 商品总数量
      this.$store.commit('updateProductNumAll', { 'productNumAll': 1, 'isAdd': true })
      // 购买单个商品种类
      this.$store.commit('updateGoodsCar', { 'goodsId': item.wareId, 'isAdd': true })
      // 购买商品 item
      this.$store.commit('updateGoodsBuyingAll', { 'goodsBuyingAll': item, 'isAdd': true })
      // window.localStorage.clear('goodsBuyingAll')
      // window.localStorage.clear('productNumAll')
    },
    minus(item) {
      if (this.productNum > 1) {
        this.productNum = this.productNum - 1
        this.$store.commit('updateProductNumAll', { 'productNumAll': 1, 'isAdd': false })
        this.$store.commit('updateGoodsCar', { 'goodsId': item.wareId, 'isAdd': false })
        this.$store.commit('updateGoodsBuyingAll', { 'goodsBuyingAll': item, 'isAdd': false })
      }
    },
    onCilcle() {
      this.isDuihao = !this.isDuihao
    },
  },
}
</script>
<style lang="scss" scoped>
.van-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
  background-color: #FAFAFA;
  margin-bottom: 10px;
  .circle {
    .circle-inner {
      display: inline-block;
      line-height: 100%;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      border: 2px solid #666;
      // background-color: #F46C18;
      .duihao {
        color: #fff;
        position: relative;
        top: 5px;
        left: 8px;
      }
    }
  }
  .duihao-background-color {
    background-color: #F46C18;
  }
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
    .wareName {
      margin-bottom: 80px;
    }
    .price {
      float: left;
      .origPrice {
        color: #E96113;
        margin-right: 20px;
      }
      .marketPrice {
        text-decoration: line-through;
        color: #ccc;
      }
    }
    .symbol {
      float: right;
      color: #E96113;
      border: 1px solid #666;
      .plus, .minus {
        display: inline-block;
        font-size: 50px;
        font-weight: 700;
        width: 50px;
        height: 50px;
        text-align: center;
        margin-right: 0px;
        line-height: 40px;
      }
      .plus {
        border-left: 1px solid #666;
      }
      .minus {
        color: #ccc;
        border-right: 1px solid #666;
        margin-right: 20px;
      }
      .productNum {
        display: inline-block;
        color: #000;
        margin-right: 20px;
      }
    }
  }
}
</style>
