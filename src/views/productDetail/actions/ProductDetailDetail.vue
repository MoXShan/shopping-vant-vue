<template>
<div class="product-detail-detail">
  <template v-for="(item, index) in descImgListNew">
    <img :src="item.url" alt="" :key="index">
  </template>
</div>
</template>
<script>
export default {
  props: {
    descImgListNew: Array,
  },
}
</script>
<style lang="scss" scoped>
.product-detail-detail {
  background-color: #fff;
  img {
    width: 100%;
  }
  margin-bottom: 10px;
}
</style>
