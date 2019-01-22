<template>
<div class="login-other-methods">
  <div class="text">
    <span class="left"></span>
    <span class="word">其他登陆方式</span>
    <span class="right"></span>
  </div>
  <div class="img">
    <van-icon name="thumb-circle-o" color="#50CF4E" size="60px" />
    <van-icon name="upgrade" color="#4EBAF8" size="60px" />
  </div>
  <div class="agreement" v-if="isSignin">
    <span class="agree">已阅读并同意</span>
    <span class="ment">《某某某注册协议》</span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    isSignin: Boolean,
  },
}
</script>
<style lang="scss" scoped>
.login-other-methods {
  text-align: center;
  padding: 40px 60px;
  .text {
    .left, .right {
      width: 25%;
      display: inline-block;
      vertical-align: middle;
      border-bottom: 1px solid #ccc;
    }
    .word {
      font-size: 35px;
      color: #959595;
      margin: 0 60px;
    }
  }
  .img {
    padding: 80px;
    display: flex;
    justify-content: space-around;
  }
  .agreement {
    font-size: 35px;
    .agree {
      color: #959595;
    }
  }
}
</style>
