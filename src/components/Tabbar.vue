<template>
<div class="tabbar">
  <div v-for="(item, index) in tabbarList" :key="index" class="tabbar-item" @click="changeTabbarIcon(index, item)">
    <img :src="item.normal" alt="" v-if="active !== index">
    <img :src="item.active" alt="" v-if="active === index">
    <span v-if="index === 3" :class="{ 'product-numAll' : productNumAll > 0 }">{{ productNumAll ? productNumAll : '' }}</span>
    <div>{{ item.name }}</div>
  </div>
</div>
</template>
<script>
import tabbar from '../../mock/tabbar.json'

export default {
  data() {
    return {

    }
  },
  computed: {
    tabbarList() {
      return tabbar.data.tabbarList
    },
    productNumAll() {
      return this.$store.state.productNumAll
    },
    active() {
      return this.$store.state.activeBarIndex
    },
  },
  methods: {
    changeTabbarIcon(index, item) {
      this.$router.push(item.path)
      // this.active = index
      this.$store.commit('updateActiveBarIndex', index)
    },
  },
}
</script>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  text-align: center;
  .tabbar-item {
    img {
      width: 60px;
      height: 60px;
    }
    .product-numAll {
      position: relative;
      display: inline-block;
      bottom: 40px;
      right: 20px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      background-color: red;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
