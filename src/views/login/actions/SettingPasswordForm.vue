<template>
<div class="setting-password">
  <van-cell-group name="forgetPasswordForm">
    <van-field
      v-model="username"
      clearable
      placeholder="请输入账号">
      <van-icon
        slot="left-icon"
        ref="usernameIcon"
        name="label-o"
        :class="{ 'van-icon-color': username }" />
    </van-field>
    <van-field
      v-model="phoneCode"
      type="text"
      clearable
      left-icon="completed"
      placeholder="验证码">
      <van-icon
        slot="left-icon"
        ref="phoneCodeIcon"
        name="completed"
        :class="{ 'van-icon-color': phoneCode }" />
      <span slot="button" class="code-button" @click="getPhoneCode">{{ phoneCodeText }}</span>
    </van-field>
    <van-field
      v-if="isForgetPassword"
      v-model="password"
      :type="passwordType"
      clearable
      placeholder="设置新密码:6-16位字母数字组合">
      <van-icon
        slot="left-icon"
        name="goods-collect-o"
        ref="passwordIcon"
        :class="{ 'van-icon-color': password }" />
      <van-icon @click="changeEye" slot="icon" name="closed-eye" size="20px" v-if="isClosedEye" />
      <van-icon @click="changeEye" slot="icon" name="eye-o" size="20px" v-else />
    </van-field>
    <van-field
      v-else
      v-model="password"
      :type="passwordType"
      clearable
      placeholder="设置密码:6-16位字母数字组合">
      <van-icon
        slot="left-icon"
        name="goods-collect-o"
        ref="passwordIcon"
        :class="{ 'van-icon-color': password }" />
      <van-icon @click="changeEye" slot="icon" name="closed-eye" size="20px" v-if="isClosedEye" />
      <van-icon @click="changeEye" slot="icon" name="eye-o" size="20px" v-else />
    </van-field>
  </van-cell-group>
  <div class="button">
    <van-button :class="{ 'bgc': (username && password) && phoneCode }" @click="forgetPassword" v-if="isForgetPassword">提交</van-button>
    <van-button :class="{ 'bgc': (username && password) && phoneCode }" @click="goRegister" v-else>已阅读并同意</van-button>
  </div>
</div>
</template>
<script>
export default {
  props: {
    isForgetPassword: Boolean,
  },
  data() {
    return {
      username: '',
      phoneCode: '',
      password: '',
      isClosedEye: true,
      sendPhoneCount: null,
      sendInterval: null,
    }
  },
  computed: {
    phoneCodeText() {
      if (this.sendPhoneCount === null) {
        return '获取验证码'
      }
      if (this.sendPhoneCount <= 0) {
        return '重新获取'
      }
      return `${this.sendPhoneCount}s`
    },
    passwordType() {
      return this.isClosedEye ? 'password' : 'text'
    },
  },
  methods: {
    // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    // Instead, use a data or computed property based on the prop's value. Prop being mutated: "color"
    // changeUsernameIconColor() {
    //   this.$refs.usernameIcon.style.color = '#E0640E'
    // },
    // changePhoneCodeIconColor() {
    //   this.$refs.phoneCodeIcon.style.color = '#E0640E'
    // },
    // changePasswordIconColor() {
    //   this.$refs.passwordIcon.style.color = '#E0640E'
    // },
    goBackLogin() {
      this.$router.push('/login')
    },
    changeEye() {
      this.isClosedEye = !this.isClosedEye
    },
    startCountdown() {
      this.stopCountdown()
      this.sendPhoneCount = 60
      this.sendInterval = setInterval(() => {
        this.sendPhoneCount -= 1
        if (this.sendPhoneCount === 0) {
          clearInterval(this.sendInterval)
          this.sendInterval = null
        }
      }, 1000)
    },
    stopCountdown() {
      if (this.sendInterval) {
        clearInterval(this.sendInterval)
        this.sendInterval = null
      }
      this.sendPhoneCount = 0
    },
    async getPhoneCode() {
      try {
        // 检测 form 表单
        // 检测电话号码
        await this.startCountdown()
      } catch (error) {
        this.stopCountdown()
        console.log(error)
      }
    },
    forgetPassword() {
      // 提交 调用忘记密码接口
    },
    goRegister() {
      // 提交 调用注册接口
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../base.scss';

.setting-password {
  .van-cell-group {
    padding: 50px;
    background-color: #F5F5F5;
  }
  /deep/ .van-icon {
    margin-right: 20px;
    line-height: 140px;
  }
  .van-field {
    text-align: center;
    padding: 10px 20px 0 40px;
    height: 140px;
    line-height: 140px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    font-size: 40px;
    &:last-child {
      border-bottom: none;
    }
  }
  .code-button {
    vertical-align: middle;
    color: $c;
    padding: 40px 20px 20px 40px;
    border-left: 2px solid #ccc;
  }
  .button {
    padding: 0 50px;
      .van-button {
        font-size: 35px;
        width: 100%;
        margin-top: 40px;
        height: 120px;
        font-size: 40px;
        background-color: #ccc;
        color: #fff;
      }
  }
  .bgc {
    // background-color: $c; // 优先级 没有 van-icon 的背景颜色 优先级高
    background-color: $c !important;
  }
  .van-icon-color {
    color: $c;
  }
  .forgetPassword {
    padding-top: 20px;
    color: #858585;
    text-align: right;
  }
}
</style>
