<template>
<div class="cooperative-merchant">
  <div class="cooperative">{{ merchantIcon.venderTitle }}</div>
  <div class="merchant-icon">
    <img :src="item.imgUrl" alt="" v-for="(item, index) in startMerchantIcon" :key="index + 1000">
    <template v-if="isMore">
      <img :src="item.imgUrl" alt="" v-for="(item, index) in endMerchantIcon" :key="index">
    </template>
  </div>
  <div class="more" @click="getMore">
    <div class="bottom" v-if="!isMore">
      <span class="text">查看更多</span>
      <span class="arrow">
        <span class="arrow-bottom"></span>
      </span>
    </div>
    <div class="top" v-if="isMore">
      <span class="text">收起</span>
      <span class="arrow">
        <span class="arrow-bottom"></span>
      </span>
    </div>
  </div>
</div>
</template>
<script>
import cooperativeMerchantIcon from '../../../../mock/cooperativeMerchantIcon.json'

export default {
  data() {
    return {
      isMore: false,
    }
  },
  computed: {
    merchantIcon() {
      return cooperativeMerchantIcon.data
    },
    startMerchantIcon() {
      return cooperativeMerchantIcon.data.venderImg.slice(0, 5)
    },
    endMerchantIcon() {
      return cooperativeMerchantIcon.data.venderImg.slice(5)
    },
  },
  methods: {
    getMore() {
      this.isMore = !this.isMore
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../base.scss';

.cooperative-merchant {
  padding: 30px;
  .cooperative {
    color: #A8A8A8;
    font-size: 35px;
  }
  .merchant-icon {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    img {
      width: 15%;
      height: 15%;
      margin: 22px;
    }
  }
  .more {
    text-align: center;
    color: #939393;
    .text {
      margin-right: 10px;
      margin-top: 20px;
      font-size: 30px;
    }
    .bottom {
      .arrow {
        @include arrow($w: 20px, $c: #939393, $dir: top);
        position: relative;
        top: 0px;
        left: 0px;
        .arrow-bottom {
          @include arrow($w: 20px, $c: #F5F5F5, $dir: top);
          position: absolute;
          top: -24px;
          left: -20px;
        }
      }
    }
    .top {
      .arrow {
        @include arrow($w: 20px, $c: #939393, $dir: bottom);
        // @include arrow($w: 20px, $c: #000, $dir: bottom);
        position: relative;
        top: -26px;
        left: 0px;
        .arrow-bottom {
          @include arrow($w: 20px, $c: #F5F5F5, $dir: bottom);
          // @include arrow($w: 20px, $c: red, $dir: bottom);
          position: absolute;
          top: -18px;
          left: -20px;
        }
      }
    }
  }
}
</style>
