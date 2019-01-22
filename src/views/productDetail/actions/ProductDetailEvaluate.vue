<template>
<div class="product-detail-evaluate">
  <span class="evaluate">商品评价(11806)</span>
  <div class="evaluate-num">
    <span class="num">综合评分</span>
    <span class="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    <span class="arrow">
      <span class="arrow-right"></span>
    </span>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../../base.scss';

.product-detail-evaluate {
  background-color: #fff;
  padding: 30px;
  font-size: 35px;
  margin-bottom: 10px;
  .evaluate {

  }
  .evaluate-num {
    float: right;
    color: #666;
    .num {
      margin-right: 10px;
    }
    .star {
      color: #FF741E;
      margin-right: 15px;
    }
    .arrow {
      position: relative;
      @include arrow($w: 18px, $c: #ccc, $dir: left);
      top: -14px;
      .arrow-right {
        position: absolute;
        @include arrow($w: 18px, $c: #fff, $dir: left);
        top: -18px;
        right: -14px;
      }
    }
  }
}
</style>
