<template>
<div class="car-quanqiu">
  <div class="car-quanqiu-adress">
    <span class="text">
      <span class="circle-inner" :class="[ isAllDuihao ? 'duihao-background-color': '' ]" @click="onAllCilcle">
        <span class="duihao">&#10003;</span>
      </span>
      <span>温都水城店</span>
    </span>
    <div v-if="isArrowDown" class="arrow-down" @click="onArrowDown">
      <div class="arrow-down-grey"></div>
    </div>
    <div v-if="isArrowTop" class="arrow-top" @click="onArrowTop">
      <div class="arrow-top-grey"></div>
    </div>
  </div>
  <template v-for="(item, index) in goodsBuyingList">
    <car-product-flex v-if="isArrowTop" :key="index" :item="item"></car-product-flex>
  </template>
  <div class="select-all">
    <div class="select-all-text">
      <span class="circle-inner" :class="[ isAllDuihao ? 'duihao-background-color': '' ]" @click="onAllCilcle">
        <span class="duihao">&#10003;</span>
      </span>
      <span class="text">全选</span>
    </div>
    <div class="price">
      <div class="priceAll">
        合计:
        <span class="priceNum">{{ '¥' + 3333 | formatPrice}}</span>
      </div>
      <div class="proceYouhui">
        <span>{{ '总额: ¥' + 3333 | formatPrice}}</span>
        <span>{{ '优惠: ¥'  + 3333 | formatPrice}}</span>
      </div>
    </div>
    <div class="select-all-num">结算({{ productNumAll }})</div>
  </div>
</div>
</template>
<script>
import CarProductFlex from './CarProductFlex'

export default {
  components: {
    CarProductFlex,
  },
  data() {
    return {
      isArrowDown: false,
      isArrowTop: true,
      isAllDuihao: true,
    }
  },
  computed: {
    goodsBuyingList() {
      return this.$store.state.goodsBuyingAll
    },
    productNumAll() {
      return this.$store.state.productNumAll
    },
  },
  methods: {
    onArrowDown() {
      this.isArrowDown = !this.isArrowDown
      this.isArrowTop = !this.isArrowTop
    },
    onArrowTop() {
      this.isArrowDown = !this.isArrowDown
      this.isArrowTop = !this.isArrowTop
    },
    onAllCilcle() {
      this.isAllDuihao = !this.isAllDuihao
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../base.scss';

.car-quanqiu {
  .car-quanqiu-adress {
    background-color: #fff;
    padding: 25px 0;
    display: flex;
    .text {
      padding-left: 20px;
      width: 90%;
    }
  }
  .circle-inner {
    vertical-align: top;
    display: inline-block;
    line-height: 100%;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #666;
    margin-right: 10px;
    // background-color: #F46C18;
    .duihao {
      color: #fff;
      position: relative;
      top: 5px;
      left: 8px;
    }
  }
  .duihao-background-color {
    background-color: #F46C18;
  }
  .arrow-down {
    position: relative;
    @include arrow($w: 20px, $c: #666, $dir: top);
    top: 8px;
    left: 20px;
    .arrow-down-grey {
      position: absolute;
      @include arrow($w: 20px, $c: #fff, $dir: top);
      top: -25px;
      left: -20px;
    }
  }
  .arrow-top {
    position: relative;
    @include arrow($w: 20px, $c: #666, $dir: bottom);
    top: -16px;
    left: 20px;
    .arrow-top-grey {
      position: absolute;
      @include arrow($w: 20px, $c: #fff, $dir: bottom);
      top: -14px;
      left: -20px;
    }
  }
  .select-all {
    display: flex;
    margin-top: 10px;
    padding: 0 20px;
    height: 100px;
    background-color: #fff;
    .select-all-text {
      line-height: 100px;
      width: 20%;
      .circle-inner {
        vertical-align: middle;
      }
      .text {
        font-size: 40px;
        font-weight: 500;
      }
    }
    .price {
      width: 50%;
      text-align: right;
      margin-right: 10px;
      .priceAll {
        font-size: 35px;
        .priceNum {
          color: #F46C18;
        }
      }
      .proceYouhui {
        color: #666;
      }
    }
    .select-all-num {
      line-height: 100px;
      color: #fff;
      width: 30%;
      text-align: center;
      background-color: #F46C18;
    }
  }
}
</style>
