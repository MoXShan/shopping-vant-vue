<template>
<div class="car">
  <div class="title">
    <span class="title-car">购物车</span>
    <span class="title-management">管理</span>
  </div>
  <div class="adress">
    <span class="adress-title">收货地址:</span>
    <span class="adress-text">dfghjdksfdfghjdksfdfghjdksfdfghjdksfdfghjdksfdfghjdksfdfghjdksfdfghjdksfdfghjdksfdfghjdksfdfghjdksf</span>
    <div class="arrow">
      <div class="arrow-grey"></div>
    </div>
  </div>
  <div class="car-quanqiu-title">全球精选</div>
  <car-quanqiu></car-quanqiu>
  <div class="car-duodian-title">多点超市</div>
</div>
</template>
<script>
import CarQuanqiu from './actions/CarQuanqiu'

export default {
  components: {
    CarQuanqiu,
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="scss" scoped>
@import '../base.scss';

.car {
  background-color: #F5F5F5;
  height: 10000px;
  .title {
    background-color: #fff;
    padding: 35px;
    color: #222;
    display: flex;
    font-size: 36px;
    border-bottom: 1px solid #efefef;
    .title-car {
      text-align: center;
      flex: 80%;
    }
  }
  .adress {
    background-color: #fff;
    color: #666;
    display: flex;
    padding: 45px;
    border-bottom: 3px dashed black;
    .adress-text {
      padding: 0 20px;
      flex: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .arrow {
      position: relative;
      @include arrow($w: 20px, $c: #666, $dir: left);
      .arrow-grey {
        position: absolute;
        top: -20px;
        right: -16px;
        @include arrow($w: 20px, $c: #fff, $dir: left);
      }
    }
  }
  .car-quanqiu-title, .car-duodian-title {
    background-color: #fff;
    padding: 35px 0;
    text-align: center;
    font-size: 38px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
}
</style>
