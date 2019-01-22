<template>
<div class="my-login">
  <div class="top">
    <div class="welcome">Hello,你好</div>
    <div class="text" @click="goLogin">登录/注册</div>
  </div>
  <div class="bottom">
    <div class="bottom-signle" v-for="(item, index) in myDataItem.topIcons" :key="index">
      <img :src="item.icon" alt="">
      <div>{{ item.title }}</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    myDataItem: Object,
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
  },
}
</script>
<style lang="scss" scoped>
.my-login {
  margin-bottom: 20px;
  padding: 70px;
  background-color: #fff;
  .top {
    padding: 0px 100px 50px;
    text-align: center;
    .welcome {
      font-size: 40px;
      margin-bottom: 20px;
    }
    .text {
      width: 350px;
      height: 80px;
      background-color: #F46C18;
      color: #fff;
      border-radius: 40px;
      line-height: 80px;
      margin: 0 auto;
    }
  }
  .bottom {
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .bottom-signle {
      // width: 33%;
      img {
        width: 60px;
        height: 60px;
        display: inline-block;
      }
    }
  }
}
</style>
