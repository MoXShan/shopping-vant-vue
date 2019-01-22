<template>
<div class="theme-park">
  <div class="title">主题<span class="park">乐园</span></div>
  <div class="img">
    <div class="left"></div>
    <div class="right">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.theme-park {
  .title {
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    .park {
      color: red;
    }
  }
  .img {
    height: 600px;
    display: flex;
    padding: 20px;
    .left {
      width: 49%;
      background-color: #FFEBE0;
      margin-right: 2%;
    }
    .right {
      width: 49%;
      .top {
        height: 48%;
        background-color: #FEEECA;
        margin-bottom: 4%;
      }
      .bottom {
        height: 48%;
        background-color: #E3FDD6;
      }
    }
  }
}
</style>
