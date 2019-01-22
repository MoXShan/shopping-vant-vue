<template>
<div class="login">
  <div class="title">
    <span @click="goMy" class="fuhao">&#10005;</span>
    <span class="text">欢迎来到某某</span>
    <span @click="goRegister" class="register">注册</span>
  </div>
  <login-form @changePhoneSignin="changePhoneSignin"></login-form>
  <login-other-methods :isSignin="isSignin"></login-other-methods>
  <cooperative-merchant></cooperative-merchant>
</div>
</template>
<script>
import LoginForm from './actions/LoginForm'
import LoginOtherMethods from './actions/LoginOtherMethods'
import CooperativeMerchant from './actions/CooperativeMerchant'

export default {
  components: {
    LoginForm,
    LoginOtherMethods,
    CooperativeMerchant,
  },
  data() {
    return {
      isSignin: true,
    }
  },
  computed: {
    isPhoneSignin() {
      return this.isSignin
    },
  },
  methods: {
    goMy() {
      this.$router.push('/my')
    },
    goRegister() {
      this.$router.push('/register')
    },
    changePhoneSignin(isSignin) {
      this.isSignin = isSignin
    },
  },
}
</script>
<style lang="scss" scoped>

.login {
  height: 100vh;
  overflow: auto;
  background-color: #F5F5F5;
  .title {
    height: 120px;
    line-height: 60px;
    background-color: #fff;
    padding: 35px;
    text-align: center;
    font-size: 35px;
    .fuhao {
      float: left;
    }
    .register {
      float: right;
    }
  }
}
</style>
