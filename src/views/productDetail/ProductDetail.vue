<template>
<div class="product-detail">
  <product-detail-banner :wareImgListNew="wareImgListNew" @ProductDetailBannerImg="ProductDetailBannerImg"></product-detail-banner>
  <product-detail-price :productDetail="productDetail"></product-detail-price>
  <product-detail-traffic></product-detail-traffic>
  <product-detail-evaluate></product-detail-evaluate>
  <div class="like">猜你喜欢</div>
  <product-detail-detail :descImgListNew="descImgListNew"></product-detail-detail>
  <product-detail-introduce :introduceList="introduceList"></product-detail-introduce>
  <product-detail-buying :productDetail="productDetail"></product-detail-buying>
</div>
</template>
<script>
import productDetail from '../../../mock/productDetail.json'
import ProductDetailBanner from './actions/ProductDetailBanner'
import ProductDetailPrice from './actions/ProductDetailPrice'
import ProductDetailTraffic from './actions/ProductDetailTraffic'
import ProductDetailEvaluate from './actions/ProductDetailEvaluate'
import ProductDetailDetail from './actions/ProductDetailDetail'
import ProductDetailIntroduce from './actions/ProductDetailIntroduce'
import ProductDetailBuying from './actions/ProductDetailBuying'

export default {
  components: {
    ProductDetailBanner,
    ProductDetailPrice,
    ProductDetailTraffic,
    ProductDetailEvaluate,
    ProductDetailDetail,
    ProductDetailIntroduce,
    ProductDetailBuying,
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log('productDetail', productDetail)
  },
  computed: {
    productDetail() {
      return productDetail.data
    },
    wareImgListNew() {
      return productDetail.data.wareImgListNew
    },
    descImgListNew() {
      return productDetail.data.descImgListNew
    },
    introduceList() {
      return productDetail.data.introduceList
    },
  },
  methods: {
    ProductDetailBannerImg() {

    },
  },
}
</script>
<style lang="scss" scoped>
.product-detail {
  height: 100vh;
  overflow: auto;
  background-color: #efefef;
  .like {
    padding: 20px;
    margin-bottom: 10px;
    background-color: #fff;
  }
}
</style>
