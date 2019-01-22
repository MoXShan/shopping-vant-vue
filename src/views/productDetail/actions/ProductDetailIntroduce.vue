<template>
<div class="product-detail-introduce">
  <div class="parameter">规格参数</div>
  <div v-for="(item, index) in introduceList" :key="index" :class="'desc' + index">
    <span class="left">{{ item.name }}</span>
    <span class="right">{{ item.value }}</span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    introduceList: Array,
  },
}
</script>
<style lang="scss" scoped>
.product-detail-introduce {
  background-color: #fff;
  margin-bottom: 200px;
  font-size: 36px;
  .parameter {
    padding: 20px;
    // margin-bottom: 20px;
  }
  .desc0 {
    border-top: 1px solid #efefef;
  }
  .desc2 {
    border-bottom: 1px solid #efefef;
  }
  .desc0, .desc1, .desc2 {
    padding:  10px 40px 0;
    color: #666;
    font-size: 30px;
    vertical-align: middle;
    span {
      padding: 10px 0px;
      display: inline-block;
      border-bottom: 1px solid #efefef;
      text-align: center;
    }
    .left {
      width: 30%;
      border-right: 1px solid #efefef;
    }
    .right {
      width: 70%;
      padding-left: 30px;
      text-align: left;
    }
  }
}
</style>
