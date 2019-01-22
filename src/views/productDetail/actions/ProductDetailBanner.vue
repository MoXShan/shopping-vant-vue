<template>
<div class="product-detail-banner">
  <van-swipe :autoplay="3000" indicator-color="#EA6216" @change="onChange($event)">
    <van-swipe-item v-for="(item, index) in wareImgListNew" :key="index">
      <img :src="item.url" alt="">
    </van-swipe-item>
  </van-swipe>
  <div class="back" @click="goBack">
    <span class="arrow">
      <span class="arrow-left"></span>
    </span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    wareImgListNew: Array,
  },
  data() {
    return {

    }
  },
  methods: {
    onChange(index, event) {
      // console.log('event', event)
      // console.log('index', index)
      this.$emit('ProductDetailBannerImg', 1)
    },
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../base.scss';

.product-detail-banner {
  position: relative;
  img {
    width: 100%;
    background-color: #fff;
  }
  /deep/ .van-swipe__indicator {
    width: 16px;
    height: 16px;
    margin-bottom: 20px;
    background-color: #222;
  }
  .back {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #B2B2B2;
    .arrow {
      position: relative;
      @include arrow($w: 24px, $c: #fff, $dir: right);
      // @include arrow($w: 24px, $c: #000, $dir: right);
      top: 8px;
      left: -0px;
      .arrow-left {
        position: absolute;
        @include arrow($w: 24px, $c: #B2B2B2, $dir: right);
        // @include arrow($w: 24px, $c: red, $dir: right);
        top: -24px;
        left: -20px;
      }
    }
  }
}
</style>
