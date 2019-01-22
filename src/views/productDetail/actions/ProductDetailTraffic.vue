<template>
<div class="product-detail-traffic">
  <div class="jingxuan">
    <div class="desc">
      <span class="text">全球精选</span>
      <span class="price">优质甄选，好货低价</span>
    </div>
    <div class="time">22:00前成功支付,预计明日送达</div>
  </div>
  <div class="zhengping">
    <span class="circle">
      <span class="duihhao">&#10003;</span>
    </span>
    <span class="promice">正品保证</span>
    <span class="circle">
      <span class="duihhao">&#10003;</span>
    </span>
    <span>次日达</span>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.product-detail-traffic {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
  .jingxuan {
    border-bottom: 1px solid #efefef;
    padding-bottom: 20px;
    .desc {
      margin-bottom: 20px;
      color: #666;
      font-size: 35px;
      .text {
        color: #6833EE;
        font-size: 40px;
        margin-right: 20px;
      }
    }
    .time {
      color: #ccc;
    }
  }
  .zhengping {
    color: #ccc;
    padding-top: 20px;
    .circle {
      display: inline-block;
      color: #F47221;
      font-size: 30px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      border: 2px solid #F47221;
      text-align: center;
      margin-right: 10px;
    }
    .promice {
      margin-right: 20px;
    }
  }
}
</style>
