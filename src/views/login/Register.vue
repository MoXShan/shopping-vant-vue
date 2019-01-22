<template>
<div class="register">
  <div class="register-title">
    <span class="arrow" @click="goBackLogin">
      <span class="arrow-left"></span>
    </span>
  </div>
  <div class="welcome">欢迎来到某某某</div>
  <setting-password-form :isForgetPassword="isForgetPassword"></setting-password-form>
  <div class="agreement">
    <span class="agree">已阅读并同意</span>
    <span class="ment">《某某某注册协议》</span>
  </div>
  <cooperative-merchant></cooperative-merchant>
</div>
</template>
<script>
import SettingPasswordForm from './actions/SettingPasswordForm'
import CooperativeMerchant from './actions/CooperativeMerchant'

export default {
  components: {
    SettingPasswordForm,
    CooperativeMerchant,
  },
  data() {
    return {
      isForgetPassword: false,
    }
  },
  computed: {
    
  },
  methods: {
    goBackLogin() {
      this.$router.push('/login')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../base.scss';

.register {
  height: 100vh;
  overflow: auto;
  background-color: #F5F5F5;
  .register-title {
    background-color: #fff;
    padding: 0 10px;
    text-align: center;
    height: 140px;
    line-height: 140px;
    font-size: 40px;
    border-bottom: 1px solid #ccc;
    .arrow {
      float: left;
      @include arrow($w: 24px, $c: #3D3F45, $dir: right);
      position: relative;
      top: 36px;
      left: 0px;
      .arrow-left {
        @include arrow($w: 24px, $c: #fff, $dir: right);
        position: absolute;
        top: -24px;
        left: -20px;
      }
    }
  }
  .welcome {
    color: $c;
    text-align: center;
    margin-top: 30px;
    font-size: 46px;
  }
  .agreement {
    text-align: center;
    font-size: 35px;
    padding-top: 50px;
    margin: 50px 0;
    .agree {
      color: #959595;
    }
  }
}
</style>
