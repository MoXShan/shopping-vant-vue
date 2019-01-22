<template>
<div class="home">
  <banner></banner>
  <van-search
    placeholder="搜索"
    background="#f2f2f2"
    @click="onSearch">
    <div slot="left-icon"><van-icon name="search" color="#f44" size="18px" style="margin-right: 5px;" /></div>
  </van-search>
  <active-item></active-item>
  <notice-top-bom :height="20" :lineNum="1"></notice-top-bom>
  <div class="img"></div>
  <theme-park></theme-park>
  <div class="img2"></div>
  <div class="product">
    <product-list
      v-for="(item, index) in productList"
      :key="index" :item="item"
      class="item">
    </product-list>
  </div>
</div>
</template>
<script>
import Banner from './actions/home/Banner'
import ActiveItem from './actions/home/ActiveItem'
import NoticeTopBom from './actions/home/NoticeTopBom'
import ThemePark from './actions/home/ThemePark'
import homeProductList from '../../../mock/productList.json'
import ProductList from './actions/home/ProductList'

export default {
  components: {
    Banner,
    ActiveItem,
    NoticeTopBom,
    ThemePark,
    ProductList,
  },
  data() {
    return {
      
    }
  },
  computed: {
    productList() {
      return homeProductList.data.wareList
    },
  },
  methods: {
    onSearch() {
      this.$router.push('/home-search')
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  max-height: 2600px;
  overflow: auto;
  padding-bottom: 300px;
  .van-search {
    margin: 40px 50px;
  }
  .img {
    margin: 20px;
    height: 200px;
    background-color: rgb(160, 221, 119);
    border-radius: 10px;
  }
  .img2 {
    margin: 20px;
    height: 200px;
    background-color: #47C9E1;
    border-radius: 10px;
  }
  .product {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    align-content: space-between;
    .item {
      width: 30%;
      margin-left: 3%;
      margin-bottom: 5%;
    }
  }
}

</style>
