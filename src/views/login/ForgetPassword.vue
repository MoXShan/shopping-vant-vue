<template>
<div class="forget-password">
  <div class="forget-password-title">
    <span class="arrow" @click="goBackLogin">
      <span class="arrow-left"></span>
    </span>
    <span>忘记密码</span>
  </div>
  <setting-password-form :isForgetPassword="isForgetPassword"></setting-password-form>
</div>
</template>
<script>
import SettingPasswordForm from './actions/SettingPasswordForm'

export default {
  components: {
    SettingPasswordForm,
  },
  data() {
    return {
      isForgetPassword: true,
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

.forget-password {
  height: 100vh;
  overflow: auto;
  background-color: #F5F5F5;
  .forget-password-title {
    background-color: #fff;
    padding: 0 10px;
    text-align: center;
    height: 140px;
    line-height: 140px;
    font-size: 40px;
    border-bottom: 1px solid #CCCCCC;
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
}
</style>
