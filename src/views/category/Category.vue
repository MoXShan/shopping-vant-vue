<template>
<div class="category">
  <category-tabs-top @currentCategory="currentCategory"></category-tabs-top>
  <div class="category-search">
    <input type="text" class="category-input">
    <div class="search-name">
      <van-icon name="search" size="20px" />
    </div>
    <div class="search-filter">
      <van-icon name="filter-o" size="20px" />
      <div class="search-filter-text">筛选</div>
    </div>
  </div>
  <category-product :currentTabTop="currentTabTop"></category-product>
</div>
</template>
<script>
import CategoryTabsTop from './actions/CategoryTabsTop'
import CategoryProduct from './actions/CategoryProduct'

export default {
  components: {
    CategoryTabsTop,
    CategoryProduct,
  },
  data() {
    return {
      currentTabTop: '多点超市',
    }
  },
  computed: {
    currentTabsTopComponent() {
      return this.currentTabTop === '全球精选' ? 'ShoppingQuanqiu' : 'ShoppingDuodian'
    },
  },
  methods: {
    currentCategory(currentCategory) {
      this.currentTabTop = currentCategory
    },
  },
}
</script>
<style lang="scss" scoped>
.category {
  height: 100vh;
  overflow: hidden;
  padding: 30px;
  .category-search {
    display: flex;
    position: relative;
    .category-input {
      padding: 0 80px;
      margin: 30px;
      background-color: #efefef;
      border: none;
      width: 80%;
      height: 70px;
      border-radius: 35px;
    }
    .search-name {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 45px;
      left: 50px;
    }
    .search-filter {
      margin-top: 20px;
      .search-filter-text {
        margin-top: -10px;
      }
    }
  }
}
</style>
