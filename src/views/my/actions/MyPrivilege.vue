<template>
<div class="my-privilege">
  <div class="privilegr" v-for="(item, index) in myDataItem.bottomIcons" :key="index">
    <img :src="item.icon" alt="">
    <div class="title">{{ item.title }}</div>
    <div v-if="item.subtitle" class="subtitle">{{ item.title }}</div>
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
.my-privilege {
  background-color: #fff;
  margin-bottom: 140px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .privilegr {
    text-align: center;
    width: 25%;
    margin-bottom: 5%;
    img {
      width: 100px;
      height: 100px;
    }
    .subtitle {
      color: #ccc;
    }
  }
}
</style>
