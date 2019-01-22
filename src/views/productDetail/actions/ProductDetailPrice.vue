<template>
<div class="product-detail-price">
  <div class="text">
    <img :src="productDetail.wareBizIcon" alt="">
    <span class="wareName">{{ productDetail.wareName}}</span>
  </div>
  <div class="price">
    <span class="marketPrice">{{ '¥' + productDetail.marketPrice | formatPrice }}</span>
    <span class="origPrice" v-if="productDetail.origPrice > productDetail.marketPrice">{{ '¥' + productDetail.origPrice | formatPrice }}</span>
    <span class="select">{{ productDetail.proTag }}</span>
    <span class="saled">已售71520件</span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    productDetail: Object,
  },
}
</script>
<style lang="scss" scoped>
.product-detail-price {
  background-color: #fff;
  padding: 20px;
  padding-top: 30px;
  margin-bottom: 10px;
  .text {
    font-size: 40px;
    img {
      width: 68px;
      height: 46px;
      vertical-align: middle;
      margin-right: 20px;
    }
    .wareName {
      // font-size: 40px;
    }
  }
  .price {
    padding: 0 20px;
    margin-top: 20px;
    .marketPrice {
      color: #E96113;
      margin-right: 20px;
      font-weight: 500;
      font-size: 36px;
    }
    .origPrice {
      color: #666;
      text-decoration: line-through;
    }
    .select {
      margin-left: 20px;
      padding: 0 10px;
      color: #fff;
      background-color: #FF6161;
    }
    .saled {
      float: right;
      color: #666;
    }
  }
}
</style>
