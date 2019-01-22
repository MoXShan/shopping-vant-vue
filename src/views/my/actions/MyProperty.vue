<template>
<div class="my-property">
  <div class="text">我的资产</div>
  <div class="property-desc">
    <div class="desc">
      <div class="num">--</div>
      <div class="contain">余额</div>
    </div>
    <div class="desc">
      <div class="num">--</div>
      <div class="contain">积分</div>
    </div>
    <div class="desc">
      <div class="num">--</div>
      <div class="contain">卡包</div>
    </div>
    <div class="desc">
      <div class="num" v-if="myDataItem.couponCount">{{ myDataItem.couponCount }}</div>
      <div class="num" v-else>--</div>
      <div class="contain">优惠券</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    myDataItem: Object,
  },
}
</script>
<style lang="scss" scoped>
.my-property {
  padding: 30px;
  background-color: #fff;
  margin-bottom: 20px;
  .text {
    padding-bottom: 30px;
    font-size: 35px;
    border-bottom: 1px solid #efefef;
  }
  .property-desc {
    color: #666;
    text-align: center;
    padding: 30px 60px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
